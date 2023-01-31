import React from "react";
import styled from "styled-components";

const QuizCategoryCard = ({ categories, categoryTitle }) => {
  //   console.log(categories, categoryTitle);
  return (
    <Wrapper>
      <div className="box">
        <div className="box-content">
          <p className="title">{categoryTitle}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default QuizCategoryCard;

const Wrapper = styled.article`
  p {
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
  }

  .box {
    height: 150px;
    width: 200px;
    background: #111;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .box:hover {
    transform: scale(1.1);
  }

  .box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    inset: 3px;
    border-radius: 7px;
    background: #111;
    overflow: hidden;
    z-index: 1;
  }

  .box::after {
    content: "";
    position: absolute;
    height: 200%;
    width: 700px;
    background: rgb(0, 98, 106);
    background: linear-gradient(
      111deg,
      rgba(0, 98, 106, 1) 0%,
      rgba(16, 169, 255, 1) 50%,
      rgba(98, 0, 255, 1) 100%
    );
    z-index: 0;
    animation: rotate 1s linear infinite;
  }

  .box-content {
    padding: 1rem;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    color: #fff;
    width: 100%;
    height: 100%;
  }

  .title {
    letter-spacing: 1px;
    color: #00c4d4;
    text-shadow: 0 0 3px #4158d0;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width:600px){
    width: 100%;
    .box {
      width: 100%;

      ::after{
        height: 350%;
      }
    }

    p {
    font-size: 1rem;
  }
  }
`;
