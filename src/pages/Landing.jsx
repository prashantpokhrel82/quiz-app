import React from "react";
import styled from "styled-components";
import img from '../assets/background.jpg'

const Landing = () => {
 
  return <Wrapper>
    <div className="content">
      <h1 className="glow">Trivia - Quiz</h1>
      <p>Enjoy a fun and intuitive gameplay experience accessible via any device</p>
    </div>
  </Wrapper>;
};

export default Landing;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${img});
  background-size: cover;
  position: relative;
  z-index:1;
  ::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    z-index: -1;
  }

  .content{
    height:100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    color:  var(--color-white);
    z-index: 10;
  }

  h1{
    font-size: 5rem;
    margin-bottom: 3rem;
    :hover{
      animation: glow 1s ease-in-out infinite alternate;
      animation: wiggle 2s linear infinite;
    }
  }

  p{
    color: var(--grey-100);
  }

`;
