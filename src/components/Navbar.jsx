import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ImHome } from "react-icons/im";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { toggleSound, setCurrentCategories } from "../redux/features/quizSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { soundOn } = useSelector((store) => store.quiz);
  return (
    <Wrapper>
      <ImHome onClick={() => dispatch(setCurrentCategories(null))} />
      {soundOn ? (
        <RxSpeakerLoud onClick={() => dispatch(toggleSound())} />
      ) : (
        <RxSpeakerOff onClick={() => dispatch(toggleSound())} />
      )}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

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
`;
