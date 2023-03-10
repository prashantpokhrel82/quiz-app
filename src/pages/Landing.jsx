import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import styled from "styled-components";
import img from "../assets/background.jpg";
import { BsGoogle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/userSlice";
import { Navigate } from "react-router-dom";

const Landing = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(loginUser(tokenResponse));
    },
  });

  if (user) {
    return <Navigate to="/quiz" />;
  }
  return (
    <Wrapper>
      <div className="content">
        <h1 className="glow title">Trivia Quiz</h1>
        <p className="subtitle">
          Enjoy a fun and intuitive gameplay experience accessible via any
          device
        </p>
        <button className="btn btn-primary" onClick={() => login()}>
          <BsGoogle />
          Login with Google
        </button>
      </div>
      <p className="credits">Developed by Prashant Pokhrel 2023.</p>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${img});
  background-size: cover;
  position: relative;
  z-index: 1;
  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    z-index: -1;
  }

  .content {
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center;
    color: var(--color-white);
    z-index: 10;
  }

  .title {
    font-size: 6rem;
    margin-bottom: 3rem;
    line-height: 6rem;
    :hover {
      animation: glow 1s ease-in-out infinite alternate;
      animation: wiggle 2s linear infinite;
    }
  }

  .subtitle {
    color: var(--grey-100);
    font-size: 2rem;
  }

  button {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 2rem;
    }
  }

  .credits {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
  }

  @media screen and (max-width: 1280px) {
    .subtitle {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    .content {
      gap: 1rem;
    }
    .title {
      font-size: 4rem;
      margin-bottom: 2rem;
      line-height: 4.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }

    button {
      width: 100%;
      font-size: 1rem;
    }
  }
`;
