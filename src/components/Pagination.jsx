import React from "react";
import styled from "styled-components";
import { changeQuestion } from "../redux/features/gameSlice";
import { useSelector, useDispatch } from "react-redux";

const Pagination = ({ totalQuestions }) => {
  const dispatch = useDispatch();
  const { submittedQuestions, currentQuestion } = useSelector(
    (store) => store.game
  );
  const pageNumbers = Array.from({ length: totalQuestions }, (_, i) => i + 1);
  const handleQuestionNumber = (questionNumber) => {
    dispatch(changeQuestion(questionNumber));
  };
  return (
    <Wrapper>
      <div className="page-numbers">
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className={
              !submittedQuestions.includes(pageNumber) &&
              pageNumber !== currentQuestion
                ? "page-number disabled"
                : "page-number"
            }
            onClick={
              !submittedQuestions.includes(pageNumber) &&
              pageNumber !== currentQuestion
                ? () => {}
                : () => handleQuestionNumber(pageNumber)
            }
          >
            {pageNumber}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .page-numbers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .page-number {
    background: var(--primary-500);
    padding: 0.5rem;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition-300);

    :hover {
      transform: scale(1.3);
    }
  }

  .page-number.disabled {
    background: var(--grey-800);
    cursor: not-allowed;
    :hover {
      transform: none;
    }
  }
`;
