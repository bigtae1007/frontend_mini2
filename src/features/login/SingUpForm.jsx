import React, { useState } from "react";
import styled from "styled-components";

//컴포넌트
import Input from "../../elems/Input";
import Button from "../../elems/Button";

export default function SignUpForm() {
  const [formstate, setFromState] = useState(false);
  const [singData, setsingData] = useState({
    username: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setsingData({ ...singData, [id]: value });
  };

  // submit 이벤트
  const submitLogin = (e) => {
    e.preventDefault();
    console.log(singData);
  };

  React.useEffect(() => {
    // 버튼 잠금
    if (
      singData.username !== "" &&
      singData.nickname !== "" &&
      singData.password !== "" &&
      singData.passwordCheck !== ""
    ) {
      setFromState(true);
    } else {
      setFromState(false);
    }
  }, [singData]);

  return (
    <WrapForm onSubmit={submitLogin}>
      <WrapInputLabel>
        <h4>아이디(e-mail)</h4>
        <Input
          id="username"
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <h4>닉네임</h4>
        <Input
          id="nickname"
          placeholder="닉네임을 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <h4>비밀번호</h4>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <h4>비밀번호 확인</h4>
        <Input
          id="passwordCheck"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <Button
        type="submit"
        size="size1"
        bgcolor={formstate ? "blue" : "grey"}
        color={formstate ? "white" : "black"}
        disabled={!formstate}
      >
        회원가입 완료
      </Button>
    </WrapForm>
  );
}

const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const WrapInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;
