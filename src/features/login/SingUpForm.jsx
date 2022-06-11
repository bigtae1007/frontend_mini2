import React, { useEffect, useState } from "react";
import styled from "styled-components";

//컴포넌트
import Input from "../../elems/Input";
import Button from "../../elems/Button";

export default function SignUpForm() {
  const [formstate, setFromState] = useState(false);
  const [signData, setsignData] = useState({
    username: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  const [email, setEmail] = useState(false);
  const [nick, setNick] = useState(false);
  const [pw, setPw] = useState(false);

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setsignData({ ...signData, [id]: value });
  };

  // submit 이벤트
  const submitLogin = (e) => {
    e.preventDefault();
    console.log(signData);
  };

  // 중복확인 이벤트
  const CheckId = () => {
    console.log(signData.username);
  };
  const CheckNick = () => {
    console.log(signData.nickname);
  };

  React.useEffect(() => {
    // input 조건
    if (
      signData.username.indexOf("@") !== -1 &&
      signData.username.indexOf(".") !== -1
    ) {
      setEmail(true);
    } else {
      setEmail(false);
    }
    if (signData.nickname.length > 2 && signData.nickname.length < 12) {
      setNick(true);
    } else {
      setNick(false);
    }
    if (
      signData.passwordCheck === signData.password &&
      signData.password !== ""
    ) {
      setPw(true);
    } else {
      setPw(false);
    }
  }, [signData]);
  useEffect(() => {
    // 버튼 잠금
    if (email && nick && pw) {
      setFromState(true);
    } else {
      setFromState(false);
    }
  }, [email, nick, pw]);

  return (
    <WrapForm onSubmit={submitLogin}>
      <WrapInputLabel>
        <div>
          <span>
            아이디(e-mail)
            <CheckText color={email ? "blue" : "red"}>
              {email ? "통과" : "이메일 형식이 아닙니다"}
            </CheckText>
          </span>

          <CheckBtn onClick={CheckId}>중복 확인</CheckBtn>
        </div>
        <Input
          id="username"
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <div>
          <span>
            닉네임
            <CheckText color={nick ? "blue" : "red"}>
              {nick ? "통과" : "2~12 사이로 작성해주세요"}
            </CheckText>
          </span>

          <CheckBtn onClick={CheckNick}>중복 확인</CheckBtn>
        </div>
        <Input
          id="nickname"
          placeholder="닉네임을 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <span>비밀번호</span>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          onChange={changeInput}
        />
      </WrapInputLabel>
      <WrapInputLabel>
        <span>
          비밀번호 확인
          <CheckText color={pw ? "blue" : "red"}>
            {pw ? "통과" : "비밀 번호가 일치하지 않습니다"}
          </CheckText>
        </span>

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

const CheckBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  float: right;
  border-radius: 10px;
  background-color: var(--grey);
  cursor: pointer;
`;

const CheckText = styled.span`
  margin-left: 20px;
  color: ${({ color }) => color};
  font-size: 10px;
`;
