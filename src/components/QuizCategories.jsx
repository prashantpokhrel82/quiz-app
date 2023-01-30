import React from "react";
import styled from "styled-components";
import QuizCategoryCard from "./QuizCategoryCard";
const QuizCategories = ({ categories }) => {
  return (
    <Wrapper className="section__padding">
      {Object.keys(categories).map((category, index) => {
        return (
          <QuizCategoryCard
            key={categories[category][0] + index}
            categories={categories[category].join()}
            categoryTitle={category}
          />
        );
      })}
    </Wrapper>
  );
};

export default QuizCategories;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;
