import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginTop() {
  const navigate = useNavigate();

  return (
    <WrapTopLogin>
      <BackBtn
        onClick={() => {
          navigate(-1);
        }}
      >
        --
      </BackBtn>
      <h2>로그인</h2>
    </WrapTopLogin>
  );
}

const WrapTopLogin = styled.div`
  position: relative;
  margin: 20px 0 50px 0;
`;
const BackBtn = styled.button`
  position: absolute;
  left: 0;
  border: none;
  background-color: var(--white);
  font-size: 2rem;
`;
