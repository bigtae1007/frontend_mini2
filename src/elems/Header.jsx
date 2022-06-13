import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// 컴포넌트
import logo_cofee from "../images/logo_cofee.png";
import Top from "../img/caret-up.svg";
import Home from "../img/home.svg";
import Plus from "../img/plus-small.svg";
import Down from "../img/caret-down.svg";
//모듈
import { logOutUser, __checkToken } from "../redux/modules/loginSlice";

const Header = () => {
  const checkToken = useSelector((state) => state.login.user.result);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localToken = localStorage.getItem("token");

  //로그아웃 이벤트
  const logOut = () => {
    alert("정상 로그아웃 되었습니다.");
    localStorage.removeItem("token");
    dispatch(logOutUser());
    navigate("/");
  };

  //토큰 유효성 검사하기
  React.useEffect(() => {
    if (localToken) {
      dispatch(__checkToken());
    }
  }, [localToken]);
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
        {checkToken ? (
          <LogoutBtn onClick={logOut}>로그아웃</LogoutBtn>
        ) : (
          <WrapLogBtn>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <button>로그인</button>
            </Link>
            <Link to={"/sign"} style={{ textDecoration: "none" }}>
              <button>회원가입</button>
            </Link>
          </WrapLogBtn>
        )}
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
const LogoutBtn = styled.button`
  width: 200px;
  height: 40px;
  color: var(--blue);
  border: none;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  :hover {
    border: 1px solid var(--blue);
  }
`;
export default Header;
