import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addComment } from "../../../redux/modules/commentSlice";

const DetailAddComment = () => {
  const dispatch = useDispatch();
  let commentText = useRef("");

  const addComment = () => {
    dispatch(__addComment(commentText.current.value));
    commentText.current.value = "";
  };
  return (
    <>
      <WrapComment>
        <h4>답변 작성해주기</h4>
        <Textarea ref={commentText} />
      </WrapComment>
      <WrapBtn>
        <button onClick={addComment}>저장</button>
        <button
          onClick={() => {
            commentText.current.value = "";
          }}
        >
          취소
        </button>
      </WrapBtn>
    </>
  );
};

const WrapComment = styled.div`
  padding: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  border: none;
  outline: none;
  border: 1px solid var(--grey);
  border-radius: 10px;
  resize: none;
  :focus {
    border: 2px solid var(--greyD);
  }
`;

const WrapBtn = styled.div`
  display: flex;
  justify-content: right;
  gap: 20px;
  margin-bottom: 100px;
  padding-right: 20px;
  button {
    padding: 5px 10px;
    border-radius: 10px;
    :first-child {
      border: 2px solid var(--blueL);
      background-color: var(--blue);
      color: var(--white);
    }
    :hover {
      border: 2px solid var(--blueD);
    }
  }
`;
export default DetailAddComment;
