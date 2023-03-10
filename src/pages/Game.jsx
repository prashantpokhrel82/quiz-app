import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loading, Navbar, Pagination, Question } from "../components";
import { useGetRandomQuestionsQuery } from "../redux/services/triviaApi";

const Game = () => {
  const navigate = useNavigate();
  const { currentCategories, difficulty, limit } = useSelector(
    (store) => store.quiz
  );

  const {
    data: questions,
    isFetching,
    isError,
  } = useGetRandomQuestionsQuery({
    categories: currentCategories,
    difficulty,
    limit,
  });

  useEffect(() => {
    if (!currentCategories) {
      navigate("/quiz");
    }
  }, [currentCategories, navigate]);

  if (isFetching) return <Loading center="center" />;
  if (isError)
    return (
      <div className="error">Something went wrong. Please try again later</div>
    );

  // console.log(questions);

  return (
    <Wrapper className="section__padding">
      <Navbar />
      {questions.map((question, index) => {
        const { incorrectAnswers, correctAnswer } = question;
        const answers = [...incorrectAnswers, correctAnswer].sort(
          () => Math.random() - 0.5
        );
        return (
          <Question
            key={question.id}
            {...question}
            answers={answers}
            currentQuestionNumber={index + 1}
          />
        );
      })}
      <Pagination totalQuestions={questions.length} />
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
