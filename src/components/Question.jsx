import React, { useState } from "react";
import styled from "styled-components";
import {
  changeQuestion,
  addToSubmittedQuestions,
  updateScore,
} from "../redux/features/gameSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { BsFillFlagFill } from "react-icons/bs";
import Modal from "./Modal";

const Question = ({
  id,
  category,
  correctAnswer,
  question,
  difficulty,
  answers,
  currentQuestionNumber: questionNumber,
}) => {
  const dispatch = useDispatch();
  const { score, currentQuestion } = useSelector((store) => store.game);
  const { limit } = useSelector((store) => store.quiz);
  const [currentAnswer, setCurrentAnswer] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const onChangeValue = (e) => {
    setCurrentAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (!currentAnswer) {
      toast.error("Please select the answer to submit");
      return;
    }
    setIsSubmitted(true);
    dispatch(addToSubmittedQuestions(questionNumber));
    if (currentAnswer === correctAnswer) {
      dispatch(updateScore());
    }
    if (currentQuestion !== limit) {
      setTimeout(() => {
        dispatch(changeQuestion(questionNumber + 1));
      }, 2000);
    }
  };

  if (currentQuestion === questionNumber)
    return (
      <Wrapper>
        <div className="top">
          <h2>{questionNumber}</h2>
          <h4>
            <span className="highlight">
              <BsFillFlagFill /> <span>{score}</span>{" "}
            </span>
            <span>/ {limit}</span>
          </h4>
        </div>
        <p>{category}</p>
        <h4 className="question">{question}</h4>
        <div className="ans-container" onChange={(e) => onChangeValue(e)}>
          {answers.map((ans, index) => (
            <div key={ans + index}>
              <input
                type="radio"
                id={ans + index}
                name={id}
                value={ans}
                disabled={isSubmitted}
              />
              <label
                className={
                  isSubmitted
                    ? correctAnswer === ans
                      ? "correct"
                      : "ïncorrect"
                    : ""
                }
                htmlFor={ans + index}
              >
                {ans}
              </label>
            </div>
          ))}
        </div>
        <div className="submit">
          <button
            type="button"
            className={isSubmitted ? "btn-submit submitted" : "btn-submit"}
            onClick={handleSubmit}
            disabled={isSubmitted}
          >
            {isSubmitted ? "Submitted" : "Submit"}
          </button>
        </div>
        {questionNumber === +limit && isSubmitted && (
          <div className="finish">
            <button
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Finish
            </button>
          </div>
        )}
        {showModal && <Modal setShowModal={setShowModal} limit={limit} />}
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
  border-radius: 1rem;
  box-shadow: 0 0 10px 2px var(--primary-500);

  .top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: var(--primary-500);
      margin-left: 2rem;
    }

    h4 {
      font-size: 2rem;
      display: flex;
      align-items: center;
      .highlight {
        font-size: 4rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-right: 1rem;
      }
    }
  }

  .highlight {
    color: var(--primary-500);
  }

  .question {
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

  .ans-container input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  .ans-container label {
    display: block;
    background: var(--grey-800);
    color: var(--color-white);
    font-size: 1.3rem;
    padding: 1rem;
    transition: var(--transition-300);
    cursor: pointer;
  }

  .ans-container label:hover {
    background: var(--grey-500);
  }

  .ans-container input[type="radio"]:checked + label {
    background-color: var(--primary-500);
  }

  .ans-container input[type="radio"]:checked + label.correct {
    background-color: var(--color-success);
    box-shadow: 0 0 5px 1px var(--primary-500);
  }
  .ans-container input[type="radio"]:checked + label.incorrect {
    background-color: var(--color-danger);
    opacity: 0.6;
  }

  .ans-container input:disabled + label {
    background-color: var(--grey-300);
    cursor: not-allowed;
  }

  .submit {
    width: 100%;
    overflow: hidden;
  }

  .ans-container div label.correct {
    background: var(--color-success);
    box-shadow: 0 0 10px 2px var(--primary-500);
  }

  .ans-container div label.ïncorrect {
    background: var(--color-danger);
    opacity: 0.6;
  }

  .btn-submit {
    margin-top: 2rem;
    width: 100%;
    border: none;
    outline: none;
    background: #00d4c1;
    color: var(--color-white);
    font-size: 1.3rem;
    padding: 1rem;
    transition: var(--transition-300);
    cursor: pointer;

    :hover {
      transform: scale(1.2);
    }
  }

  .btn-submit.submitted {
    background: var(--grey-700);
    cursor: not-allowed;
    :hover {
      transform: none;
    }
  }

  .finish {
    margin-top: 2rem;
    button {
      min-width: 250px;
      border: none;
      outline: none;
      padding: 1rem 2rem;
      background-color: var(--primary-500);
      border-radius: 2rem;
      color: var(--color-white);
      font-size: 1.2rem;
      cursor: pointer;
      transition: var(--transition-300);
      :hover {
        background: var(--color-danger);
        transform: scale(1.2);
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;

    .ans-container label {
      font-size: 1rem;
    }

    .top {
      h2 {
        margin-left: 0;
      }

      h4 {
        font-size: 1.5rem;
        .highlight {
          font-size: 2.5rem;
        }
      }
    }

    .finish {
      width: 100%;
      button {
        width: 100%;
        min-width: unset;
        display: block;
      }
    }
  }
`;
