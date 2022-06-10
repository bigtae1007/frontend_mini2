import React from "react";
import styled from "styled-components";

const PostList = () => {
  return (
    <div>
      <Warp>
        <PostBox>
          <div>
            <Img>언어 이미지</Img>
          </div>
          <div>
            <h4>제목</h4>
            <p>글 내용(글자 수 또는 줄 수 제한 주기)</p>
            <p>작성자, 작성시간</p>
            <p>좋아요 수, 댓글 수</p>
          </div>
        </PostBox>
      </Warp>
      <Warp>
        <PostBox>
          <div>
            <Img>언어 이미지</Img>
          </div>

          <div>
            <h4>제목</h4>
            <p>글 내용(글자 수 또는 줄 수 제한 주기)</p>
            <p>작성자, 작성시간</p>
            <p>좋아요 수, 댓글 수</p>
          </div>
        </PostBox>
      </Warp>
      <Warp>
        <PostBox>
          <div>
            <Img>언어 이미지</Img>
          </div>

          <div>
            <h4>제목</h4>
            <p>글 내용(글자 수 또는 줄 수 제한 주기)</p>
            <p>작성자, 작성시간</p>
            <p>좋아요 수, 댓글 수</p>
          </div>
        </PostBox>
      </Warp>
    </div>
  );
};

const Warp = styled.div`
  width: 70vw;

  margin: 20px auto;
  padding: 20px;
  /* background-color: aquamarine; */
`;

const PostBox = styled.div`
  display: flex;

  padding: 20px;
  /* background-color: green; */
  border-bottom: solid 2px black;

  div {
    display: block;
  }

  h4 {
    margin: 5px 20px;
    text-align: left;
  }

  p {
    margin: 5px 20px;
    text-align: left;
  }
`;
const Img = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
`;
export default PostList;
