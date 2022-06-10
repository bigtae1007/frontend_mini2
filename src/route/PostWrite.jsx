import React from "react";
import styled from "styled-components";

const PostWrite = () => {
  const title_ref = React.useRef(null);
  const select_ref = React.useRef(null);
  const text_ref = React.useRef(null);

  const addPost = () => {
    console.log(
      title_ref.current.value,
      select_ref.current.value,
      text_ref.current.value
    );
  };

  return (
    <Wrap>
      <PostWarp>
        <div>
          <input ref={title_ref} placeholder="글 제목" />
        </div>
        <div>
          <select ref={select_ref}>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Node">Node</option> {/* 선택하려던 부분! */}
            <option value="view">view</option>
          </select>
        </div>
        <div>
          <input ref={text_ref} className="textIpt" placeholder="글 내용" />
        </div>
        <div>
          <button onClick={addPost}>작성하기</button>
        </div>
      </PostWarp>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80vw;
  margin: 50px auto;
`;

const PostWarp = styled.div`
  display: block;

  div {
    margin: 15px;
  }

  input {
    width: 60vw;
  }
  select {
    width: 60vw;
  }

  .textIpt {
    height: 20vh;
  }
`;
export default PostWrite;
