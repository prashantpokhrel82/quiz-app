import React from "react";
import styled from "styled-components";
import QuizCategoryCard from "./QuizCategoryCard";
const QuizCategories = ({ categories }) => {
  const listOfCategories = { ...categories, Random: ["all"] };
  return (
    <Wrapper className="section__padding">
      <h5>!!Select category to start Trivia Quiz!!</h5>

      <div className="quiz-categories">
        {Object.keys(listOfCategories).map((category, index) => {
          return (
            <QuizCategoryCard
              key={listOfCategories[category][0] + index}
              categories={listOfCategories[category].join()}
              categoryTitle={category}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuizCategories;

const Wrapper = styled.div`
  > h5 {
    margin-bottom: 3rem;
    text-align: center;
  }
  .quiz-categories {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;
