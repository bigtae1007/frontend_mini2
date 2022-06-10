import React from "react";
import styled from "styled-components";
import Input from "../elems/Input";
import LoginBottom from "../features/login/LoginBottom";
import LoginForm from "../features/login/LoginForm";

//컴포넌트
import LoginTop from "../features/login/LoginTop";
import logo from "../logo.svg";

export default function Login() {
  return (
    <WrapLoginBox>
      <LoginTop title="로그인" />
      <WrapLogo>
        <img src={logo} alt="" />
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
  border: 1px solid #000;
`;
const WrapLogo = styled.div`
  margin: 0 auto;

  width: 70%;
  height: 200px;
`;
