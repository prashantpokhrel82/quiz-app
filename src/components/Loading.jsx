import React from "react";
import styled from "styled-components";

const Loading = ({ center }) => {
  return (
    <Wrapper>
      <div className={center ? "loading loading-center" : "loading"}></div>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  .loading {
    width: 80px;
    height: 80px;
  }

  .loading-center {
    margin: 0 auto;
  }

  .loading::after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    /* margin: 8px; */
    padding: 8px;
    box-sizing: border-box;
    border: 32px solid #00c4d4;
    border-color: #00c4d4 transparent #00c4d4 transparent;
    animation: lds-hourglass 1.2s infinite;
  }
`;
