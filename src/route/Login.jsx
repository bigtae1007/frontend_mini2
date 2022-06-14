import React from "react";
import styled from "styled-components";

//컴포넌트
import LoginTop from "../features/login/LoginTop";
import LoginBottom from "../features/login/LoginBottom";
import LoginForm from "../features/login/LoginForm";
import logo_cofee from "../images/logo_cofee.png";

// 로그인 컴포넌트
export default function Login() {
  return (
    <WrapLoginBox>
      <LoginTop title="로그인" />
      <WrapLogo>
        <LogoImg src={logo_cofee} alt="" />
      </WrapLogo>
      <LoginForm />
      <LoginBottom />
    </WrapLoginBox>
  );
}

const WrapLoginBox = styled.div`
  width: 400px;
  height: 600px;
  margin: 100px auto;
  padding: 10px;
  background-color: var(--white);
  border-radius: 10px;
`;
const WrapLogo = styled.div`
  margin: 0 auto;
  object-fit: cover;

  width: 70%;
  height: 200px;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
