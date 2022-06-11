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
          <select ref={select_ref}>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Node">Node</option> {/* 선택하려던 부분! */}
            <option value="view">view</option>
          </select>
          <button onClick={addPost}>작성하기</button>
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

export default PostWrite;
