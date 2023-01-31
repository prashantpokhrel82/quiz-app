import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loading, Navbar, Question } from "../components";
import { useGetRandomQuestionsQuery } from "../redux/services/triviaApi";

const Game = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isPlaying, currentCategories, difficulty, limit, soundOn } =
    useSelector((store) => store.quiz);

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
  }, [currentCategories]);

  if (isFetching) return <Loading center="center" />;
  if (isError)
    return (
      <div className="error">Something went wrong. Please try again later</div>
    );

  console.log(questions);
  return (
    <Wrapper className="section__padding">
      <Navbar />
      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.div``;
