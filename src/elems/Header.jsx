import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_cofee from "../images/logo_cofee.png";
const Header = () => {
  return (
    <header>
      <Wrap>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <LogoImg src={logo_cofee} alt="로고 사진" />
        </Link>
        <WrapSearch>
          <SearchInput type="text" placeholder="검색 키워드를 입력해주세요" />
          <img src="" alt="" />
          <SearchBtn>&#128269;</SearchBtn>
        </WrapSearch>
        <WrapLogBtn>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <button>로그인</button>
          </Link>
          <Link to={"/sign"} style={{ textDecoration: "none" }}>
            <button>회원가입</button>
          </Link>
        </WrapLogBtn>
      </Wrap>
      <Link to={"/post"} style={{ textDecoration: "none" }}>
        <PostBtn>추가하기</PostBtn>
      </Link>
    </header>
  );
};
const Wrap = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 100px;
  padding: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid var(--greyD);
  background-color: #eef;
`;

const WrapLogBtn = styled.div`
  display: flex;
  gap: 10px;
  width: 200px;
  & > a {
    & button {
      width: 100px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }
    &:first-child button {
      border-right: 1px solid var(--grey);
      color: var(--blue);
      font-weight: 500;
    }
  }
`;

const PostBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const LogoImg = styled.img`
  width: 200px;
  object-fit: contain;
`;

const WrapSearch = styled.form`
  width: 40%;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  outline: none;
  border: none;
  border: 1px solid var(--blue);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 20px;
  text-align: center;
  :focus {
    transition: 0.1s border;
    border: 3px solid var(--blue);
    border-radius: 20px;
    text-align: left;
  }
`;
const SearchBtn = styled.button`
  width: 25px;
  height: 25px;
  font-size: 20px;
  border: none;
`;
export default Header;
