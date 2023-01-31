import React from "react";
import styled from "styled-components";

const Question = ({
  category,
  correctAnswer,
  incorrectAnswers,
  question,
  difficulty,
}) => {
  const answers = [...incorrectAnswers, correctAnswer].sort(
    () => Math.random() - 0.5
  );

  return (
    <Wrapper>
      <h1>{question}</h1>
      <div className="ans-container">
        {answers.map((ans, index) => {
          return (
            <div className="ans" key={ans + index}>
              <p>{ans}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;

  background: var(--grey-900);
  box-shadow: 0 0 10px 2px var(--primary-500);

  h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  .ans-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
  }

  .ans {
    width: 100%;
    background: var(--grey-800);
    padding: 1rem;
    transition: var(--transition-300);
    cursor: pointer;
    :hover {
      transform: scale(1.2);
      background: var(--grey-500);
    }
  }

  p {
    color: var(--color-white);
    font-size: 1.3rem;
  }
`;
