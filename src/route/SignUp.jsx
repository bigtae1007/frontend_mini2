import React from "react";
import styled from "styled-components";
import Input from "../elems/Input";
import LoginTop from "../features/login/LoginTop";

export default function SignUp() {
  return (
    <WrapSignBox>
      <LoginTop />
      <Input />
    </WrapSignBox>
  );
}
const WrapSignBox = styled.div`
  width: 400px;
  height: 600px;
  margin: 100px auto;
  padding: 10px;
  border: 1px solid #000;
`;
