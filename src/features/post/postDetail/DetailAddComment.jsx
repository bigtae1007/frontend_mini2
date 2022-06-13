import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addComment } from "../../../redux/modules/commentSlice";

const DetailAddComment = ({ postId }) => {
  const checkLogin = useSelector((state) => state.login.user.result);
  const dispatch = useDispatch();
  let commentText = useRef("");

  const addComment = () => {
    const addState = dispatch(
      __addComment({ comment: commentText.current.value, postId: postId })
    );
    commentText.current.value = "";
  };
  return (
    <>
      <WrapComment>
        <h4>
          {checkLogin ? "답변 작성해주기" : "답변을 하시려면 로그인 해주세요"}
        </h4>
        {checkLogin ? <Textarea ref={commentText} /> : null}
      </WrapComment>
      {checkLogin ? (
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
      ) : null}
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
