import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { GiAchievement } from "react-icons/gi";
import { RiCloseCircleLine } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { setCurrentCategories } from "../redux/features/quizSlice";
import { useNavigate } from "react-router-dom";

const Modal = ({ setShowModal, limit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { score } = useSelector((store) => store.game);
  const { difficulty, currentCategories } = useSelector((store) => store.quiz);

  return (
    <Wrapper>
      <div className="modal">
        <div className="title">
          <h2>{difficulty} Mode</h2>
          <p>{currentCategories}</p>
        </div>

        <div className="bottom">
          <ImHome
            onClick={() => {
              dispatch(setCurrentCategories(null));
              navigate("/quiz");
            }}
          />
          <div className="circle">
            <div className="topp">
              <GiAchievement className="medal" />
              <h1>
                {score} / {limit}
              </h1>
            </div>
          </div>
          <RiCloseCircleLine
            className="close-ico"
            onClick={() => setShowModal(false)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);

  .modal {
    position: relative;
    height: 90%;
    width: 90%;
    border-radius: 1rem;
    box-shadow: 0 0 20px 1px var(--primary-500);
    background-color: var(--grey-900);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: var(--primary-500);
    p {
      text-transform: uppercase;
    }
  }

  .close-ico {
    color: var(--color-white);
    font-size: 2rem;
    cursor: pointer;
    transition: var(--transition-300);
    :hover {
      color: var(--color-danger);
    }
  }

  .circle {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background: var(--grey-900);
    box-shadow: 0 0 20px 1px var(--primary-500);
    border: 1px solid var(--primary-500);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topp {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    font-size: 5rem;

    .medal {
      color: var(--primary-500);
      animation: beat 1s ease-in-out infinite alternate;
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    svg {
      color: var(--color-white);
      font-size: 3rem;
      cursor: pointer;
      transition: var(--transition-300);

      :hover {
        color: var(--primary-500);
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .bottom {
      flex-direction: column-reverse;
      gap: 2rem;
    }
    .close-ico {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .topp {
      h1 {
        font-size: 3.5rem;
      }
    }

    .circle {
      height: 250px;
      width: 250px;
    }
  }
`;
