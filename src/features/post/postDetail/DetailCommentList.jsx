import React from "react";
import styled from "styled-components";

const DetailCommentList = () => {
  return (
    <>
      <WrapComment>
        <h3>작성자</h3>
        <span>시간이 들어가겠지</span>
      </WrapComment>
      <CommentText>
        <pre>
          내용이 쭉 <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>쭉
        </pre>
      </CommentText>
    </>
  );
};

export default DetailCommentList;

const WrapComment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;

  border: 1px solid var(--greyD);
  border-radius: 10px 10px 0 0;
  span {
    margin-right: 10px;
    color: var(--greyD);
    font-weight: 600;
  }
`;

const CommentText = styled.div`
  text-align: left;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  border: 1px solid var(--grey);
  margin-bottom: 8px;
`;
