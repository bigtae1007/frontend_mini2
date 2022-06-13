import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
//컴포넌트
import Button from "../../../elems/Button";

const DetailCommentList = () => {
  const myNick = useSelector((state) => state.login.user.nickName);
  const checkMyComment = "" === myNick;
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
      {checkMyComment ? (
        <WrapBtn>
          <div>
            <Button size="size2" bgcolor="blue" color="white">
              수정
            </Button>
            <Button size="size2" border="blue">
              삭제
            </Button>
          </div>
        </WrapBtn>
      ) : null}
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

const WrapBtn = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  div {
    display: flex;
    gap: 10px;
    width: 30%;
    margin-bottom: 10px;
  }
`;
