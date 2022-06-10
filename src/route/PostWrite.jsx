import React from "react";
import styled from "styled-components";

const PostWrite = () => {
  return (
    <Wrap>
      <PostWarp>
        <div>
          <input placeholder="글 제목" />
        </div>
        <div>
          <select>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Node">Node</option> {/* 선택하려던 부분! */}
            <option value="view">view</option>
          </select>
        </div>
        <div>
          <input className="commetIpt" placeholder="글 내용" />
        </div>
        <div>
          <button>작성하기</button>
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
    width: 61vw;
  }

  .commetIpt {
    height: 20vh;
  }
`;
export default PostWrite;
