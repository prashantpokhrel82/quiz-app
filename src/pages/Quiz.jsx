import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetAllCategoriesQuery,
  useGetRandomQuestionsQuery,
} from "../redux/services/triviaApi";
import { Loading, QuizCategories } from "../components";
import styled from "styled-components";
import { setQuestions } from "../redux/features/quizSlice";

const Quiz = () => {
  const [limit, setLimit] = useState(1);
  const [difficulty, setDifficulty] = useState("easy");

  const { data, isFetching, isError } = useGetAllCategoriesQuery();
  if (isFetching) return <Loading center="center" />;
  if (isError) return "error";
  if (data) {
    return (
      <Wrapper>
        <QuizCategories categories={data} />
      </Wrapper>
    );
  }
};

export default Quiz;

const Wrapper = styled.div`
  background: var(--primary-900);
`;
