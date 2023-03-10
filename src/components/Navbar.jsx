import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ImHome } from "react-icons/im";
import { setCurrentCategories } from "../redux/features/quizSlice";
import { BiLogOut } from "react-icons/bi";
import { logoutUser } from "../redux/features/userSlice";
import AudioPlay from "./AudioPlay";

const Navbar = () => {
  const dispatch = useDispatch();
  const { picture } = useSelector((store) => store.user.user);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <ImHome
        className="ico"
        onClick={() => dispatch(setCurrentCategories(null))}
      />
      <div className="right">
        <div className="profile">
          <div
            className="profile-image"
            onClick={() => setShowLogout(!showLogout)}
          >
            <img src={`${picture}`} alt="user profile" />
          </div>
          <div
            className={
              showLogout ? "logout-container show" : "logout-container"
            }
          >
            <button
              type="button"
              className="btn-logout"
              onClick={() =>
                dispatch(logoutUser("You are successfully logged out"))
              }
            >
              <BiLogOut className="logout-icon" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        <AudioPlay />
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .ico {
    color: var(--color-white);
    font-size: 3rem;
    cursor: pointer;
    transition: var(--transition-300);

    :hover {
      color: var(--primary-500);
      transform: scale(1.1);
    }
  }

  .right {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .profile-image {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 5px 1px var(--primary-500);
    transition: var(--transition-300);
    cursor: pointer;

    :hover {
      box-shadow: 0 0 5px 2px var(--primary-500);
    }

    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
    }
  }

  .profile {
    position: relative;
  }

  .logout-container {
    position: absolute;
    bottom: -3rem;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }

  .logout-container.show {
    display: block;
  }

  .btn-logout {
    border: none;
    outline: none;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    background: var(--grey-600);
    color: var(--color-white);
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition-300);
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    :hover {
      background: var(--primary-500);
    }
  }

  .logout-icon {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .ico {
      font-size: 2rem;
    }

    .profile-image {
      height: 30px;
      width: 30px;
    }
  }
`;
