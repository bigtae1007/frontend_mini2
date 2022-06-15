import React, { useState } from "react";
import styled from "styled-components";

// redux
import { useDispatch } from "react-redux";

// 모듈
import { __searchPost } from "../../redux/modules/postSlice";

const PostSearch = () => {
  const [serch, setSerch] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <>
        <SearchInput
          value={serch}
          placeholder="검색 키워드를 입력해주세요"
          onChange={(e) => {
            setSerch(e.target.value);
          }}
          onKeyPress={(e) => {

            if (e.key === "Enter" && ) {
              dispatch(__searchPost(serch));
            }
          }}
        />
        <img src="" alt="" />
        <SearchBtn onClick={() => {
          dispatch(__searchPost(serch));
        }}>&#128269;</SearchBtn>
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

export default PostSearch;
