import React, { useState } from "react";
import styled from "styled-components";

// redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// 모듈
import { __searchPost } from "../../redux/modules/postSlice";

import back from "../../img/back.png";

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <>
        {" "}
        <BackBtn>⏪</BackBtn>
        <SearchInput
          value={search}
          placeholder="검색 키워드를 입력해주세요"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              console.log(search);
              dispatch(__searchPost(search));
              setSearch("");
            }
          }}
        />
        <img src="" alt="" />
        <SearchBtn
          onClick={(e) => {
            if (search === "") {
              window.alert("검색 키워드를 입력해주세요!");
              setSearch("");
            } else {
              e.preventDefault();
              dispatch(__searchPost(search));
              setSearch("");
            }
          }}
        >
          &#128269;
        </SearchBtn>
      </>
    </div>
  );
};

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
const BackBtn = styled.button`
  font-size: 20px;
  border: none;
`;

export default PostSearch;
