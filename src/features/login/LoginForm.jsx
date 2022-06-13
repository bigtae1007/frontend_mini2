import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// 컴포넌트
import Input from "../../elems/Input";
import Button from "../../elems/Button";
import { __login } from "../../redux/modules/loginSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  // 버튼 잠금 state
  const [formstate, setFromState] = useState(false);
  // data 입력 state
  const [loginData, setloginData] = useState({ email: "", password: "" });

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setloginData({ ...loginData, [id]: value });
  };

  // submit 이벤트
  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(__login(loginData));
  };

  React.useEffect(() => {
    // 버튼 잠금
    if (loginData.email !== "" && loginData.password !== "") {
      setFromState(true);
    } else {
      setFromState(false);
    }
  }, [loginData]);

  return (
    <WrapForm onSubmit={submitLogin}>
      <Input
        id="email"
        type="email"
        placeholder="이메일을 입력"
        required
        onChange={changeInput}
      />
      <Input
        id="password"
        placeholder="비밀번호 입력"
        required
        onChange={changeInput}
      />
      <Button
        type="submit"
        size="size1"
        bgcolor={formstate ? "blue" : "grey"}
        color={formstate ? "white" : "black"}
        disabled={!formstate}
      >
        로그인
      </Button>
    </WrapForm>
  );
}

const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
