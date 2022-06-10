import React from "react";
import styled, { css } from "styled-components";

export default function Button({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
}

const Btn = styled.button`
  ${({ size }) => {
    switch (size) {
      case "size1":
        return size1;
      case "size2":
        return size2;
      default:
        break;
    }
  }}
  background-color: #ccc;

  border: ${({ border }) => {
    return border ? "1px solid var(--blue)" : "none";
  }};
  color: ${({ color }) => `var(--${color})`};
  background-color: ${({ bgcolor }) => `var(--${bgcolor})`};
  height: 40px;
  border-radius: 10px;
`;

export const size1 = css`
  width: 100%;
`;
export const size2 = css`
  width: 50%;
`;
