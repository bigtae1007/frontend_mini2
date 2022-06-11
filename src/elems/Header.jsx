import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Top from "../img/caret-up.svg";
import Home from "../img/home.svg";
import Plus from "../img/plus-small.svg";
import Down from "../img/caret-down.svg";

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

      <BtnWrap>
        <TopBtn
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <img src={Top} alt="" />
        </TopBtn>

        <Link to={"/"} style={{ textDecoration: "none" }}>
          <HomeBtn>
            <img src={Home} alt="" />
          </HomeBtn>
        </Link>
        <Link to={"/post"} style={{ textDecoration: "none" }}>
          <PostBtn>
            <img src={Plus} alt="" />
          </PostBtn>
        </Link>
        <BotBtn
          onClick={() => {
            window.scrollTo({ top: 5000, left: 0, behavior: "smooth" });
          }}
        >
          <img src={Down} alt="" />
        </BotBtn>
      </BtnWrap>
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

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
  right: 20px;
  img {
    width: 50px;
    height: 50px;
    margin: 0;
  }
`;

const TopBtn = styled.button`
  border: none;
  background-color: transparent;
`;
const HomeBtn = styled.button`
  border: none;
  background-color: transparent;

  img {
    width: 25px;
    height: 25px;
  }
`;
const PostBtn = styled.button`
  border: none;
  background-color: transparent;
`;
const BotBtn = styled.button`
  border: none;
  background-color: transparent;
`;
export default Header;
