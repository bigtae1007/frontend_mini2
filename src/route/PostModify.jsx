import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

//모듈
// import { __editPost } from "../redux/modules/postSlice";

const PostModify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const title_ref = React.useRef(null);
  const select_ref = React.useRef(null);
  const text_ref = React.useRef(null);

  const modifyPost = () => {
    // dispatch(
    //   __editPost({
    //     title: title_ref.current.value,
    //     img: select_ref.current.value,
    //     content: text_ref.current.value,
    //   })
    // );
    navigate("/");
  };
  return (
    <Wrap>
      <PostWarp>
        <div>
          <select ref={select_ref}>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Node">Node</option> {/* 선택하려던 부분! */}
            <option value="view">view</option>
          </select>
          <button onClick={modifyPost}>수정하기</button>
        </div>
        <div></div>
        <TitleIpt>
          <textarea ref={title_ref} placeholder="제목을 입력하세요." />
        </TitleIpt>

        <div>
          <textarea ref={text_ref} className="textIpt" placeholder="" />
        </div>
      </PostWarp>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 60vw;
  margin: 50px auto;
`;

const PostWarp = styled.div`
  display: block;

  div {
    margin: 15px;
  }

  select {
    margin: 50px 0 30px 0;
    float: left;
  }
  button {
    margin: 50px 0 30px 0;
    float: right;
    border: none;
    background-color: transparent;
  }
  textarea {
    width: 60vw;
    border: none;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }

  .textIpt {
    margin-bottom: 200px;
  }
`;

const TitleIpt = styled.div`
  textarea {
    font-size: 25px;
    margin-bottom: 20px;
  }
  border-bottom: 2px solid lightgray;
`;
export default PostModify;
