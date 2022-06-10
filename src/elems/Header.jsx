import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <Wrap>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <MainBtn>
            <button>메인페이지</button>
          </MainBtn>
        </Link>
        <div>
          <p>게시물 작성을 원하시면 login을 진행하세요</p>
        </div>
        <LogBtn>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <button>로그인</button>
          </Link>
          <Link to={"/sign"} style={{ textDecoration: "none" }}>
            <button>회원가입</button>
          </Link>
        </LogBtn>
      </Wrap>
      <Link to={"/post"} style={{ textDecoration: "none" }}>
        <PostBtn>추가하기</PostBtn>
      </Link>
    </header>
  );
};
const Wrap = styled.div`
  display: flex;
  height: 50px;

  padding: 20px;
  background-color: lightblue;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const MainBtn = styled.div`
  margin: 0;
`;

const LogBtn = styled.div`
  margin: 0;
`;

const PostBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
export default Header;
