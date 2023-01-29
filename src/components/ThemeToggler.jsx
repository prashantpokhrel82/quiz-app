import React, { useContext } from "react";
import styled from "styled-components";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import ThemeContext from "../utils/ThemeContext";

const ThemeToggler = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledLabel>
      <input
        type="checkbox"
        checked={theme.theme === "theme-dark"}
        onChange={() => theme.toggleTheme()}
      />
      <div>
        <SunIcon />
        <div className="circle"></div>
        <MoonIcon />
      </div>
    </StyledLabel>
  );
};

export default ThemeToggler;

const StyledLabel = styled.label`
  input {
    position: fixed;
    left: -9999999px;
  }

  input ~ div {
    width: 55px;
    height: 25px;
    background: var(--primary-900);
    border-radius: 2rem;
    position: relative;
    cursor: pointer;
  }

  svg {
    height: 18px;
    color: var(--color-golden);
    border-radius: 7px;
    position: absolute;
    top: 3px;
  }

  svg:first-child {
    left: 4px;
  }

  svg:last-child {
    right: 4px;
  }

  .circle {
    background: #fff;
    height: 18px;
    width: 18px;
    position: absolute;
    left: 3.5px;
    top: 3.5px;
    border-radius: 50%;
    transition: var(--transition);
    z-index: 1;
  }

  input:checked ~ div {
    background: #000;
    .circle {
      left: 33px;
    }
  }
`;
