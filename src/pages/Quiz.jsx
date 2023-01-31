import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetAllCategoriesQuery,
  useGetRandomQuestionsQuery,
} from "../redux/services/triviaApi";
import { Loading, Navbar, QuizCategories } from "../components";
import styled from "styled-components";
import { setLimit, setDifficulty } from "../redux/features/quizSlice";

const Quiz = () => {
  const dispatch = useDispatch();
  const { limit, difficulty } = useSelector((store) => store.quiz);

  const { data, isFetching, isError } = useGetAllCategoriesQuery();
  if (isFetching) return <Loading center="center" />;
  if (isError) return "error";
  if (data) {
    return (
      <Wrapper className="section__padding">
        <Navbar />
        <div className="difficulty">
          <button
            className={
              difficulty === "easy" ? "difficulty-btn active" : "difficulty-btn"
            }
            onClick={() => dispatch(setDifficulty("easy"))}
          >
            Easy
          </button>
          <button
            className={
              difficulty === "medium"
                ? "difficulty-btn active"
                : "difficulty-btn"
            }
            onClick={() => dispatch(setDifficulty("medium"))}
          >
            Medium
          </button>
          <button
            className={
              difficulty === "hard" ? "difficulty-btn active" : "difficulty-btn"
            }
            onClick={() => dispatch(setDifficulty("hard"))}
          >
            Hard
          </button>
        </div>

        <div className="limit-slider">
          <label htmlFor="volume">Number of Questions </label>
          <span>{limit}</span>
          <input
            type="range"
            id="limit"
            name="limit"
            min="5"
            max="20"
            value={limit}
            onChange={(e) => dispatch(setLimit(e.target.value))}
          />
        </div>

        <QuizCategories categories={data} />
      </Wrapper>
    );
  }
};

export default Quiz;

const Wrapper = styled.div`
  background: var(--primary-900);

  .difficulty {
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: center;
  }

  .difficulty-btn {
    border: 1px solid transparent;
    outline: none;
    padding: 1rem 2rem;
    background: var(--grey-800);
    font-size: 1.2rem;
    color: var(--color-white);
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition-300);

    :hover {
      transform: scale(1.05);
      background: transparent;
      border-color: var(--primary-500);
    }
  }

  .difficulty-btn.active {
    background: var(--primary-500);
  }

  .limit-slider {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    label {
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
    }

    span {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-500);
    }

    input {
      -webkit-appearance: none;
      height: 20px;
      width: 350px;
      border-radius: 2rem;
      background: linear-gradient(
        111deg,
        #3ed9e7 0%,
        rgba(16, 169, 255, 1) 50%,
        #00e1ff 100%
      );
      outline: none;
      opacity: 1;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;

      ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: var(--color-white);
        cursor: pointer;
      }

      ::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: var(--color-white);
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .difficulty {
      flex-direction: column;
      gap: 1rem;
    }

    .difficulty-btn {
      width: 100%;
    }

    .limit-slider {
      gap: 0.5rem;
      margin-bottom: 1rem;
      input {
        width: 100%;
      }
    }
  }
`;
