import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../../elems/Button";
import { __changeComment } from "../../../redux/modules/commentSlice";

const DetailChangeComment = ({ commentData, btnState }) => {
  const dispatch = useDispatch();
  const commentText = useRef("");

  // 댓글 수정하기 이벤트
  const changeComment = () => {
    dispatch(
      __changeComment({
        postId: commentData.PostId,
        commentId: commentData.id,
        comment: commentText.current.value,
      })
    );
    btnState(false);
  };

  useEffect(() => {
    commentText.current.value = commentData.comment;
  }, [commentData]);
  return (
    <BackgroundDiv>
      <Wrapdiv>
        <h3>댓글 수정하기</h3>
        <WrapTextarea>
          <CommentChangeTextBox ref={commentText} />
        </WrapTextarea>
        <WrapBtn>
          <Button
            size="size1"
            color="white"
            bgcolor="blue"
            onClick={changeComment}
          >
            수정하기
          </Button>
          <Button
            size="size3"
            color="blue"
            border="blue"
            onClick={() => {
              btnState(false);
            }}
          >
            닫기
          </Button>
        </WrapBtn>
      </Wrapdiv>
    </BackgroundDiv>
  );
};

export default DetailChangeComment;

const BackgroundDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Wrapdiv = styled.div`
  position: fixed;
  left: 50%;
  top: 200px;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 500px;
  padding: 20px 30px;
  background-color: var(--white);
  opacity: 1;
  border-radius: 20px;
  box-shadow: 1px 1px 2px 2px;
`;

const WrapTextarea = styled.div`
  border: 2px solid var(--blue);
  width: 100%;
  border-radius: 20px;
`;
const CommentChangeTextBox = styled.textarea`
  border: none;
  resize: none;
  width: 90%;
  height: 320px;
  margin: 10px;
  outline: none;
  overflow-y: auto;
`;
const WrapBtn = styled.div`
  display: flex;
  gap: 20px;
`;
