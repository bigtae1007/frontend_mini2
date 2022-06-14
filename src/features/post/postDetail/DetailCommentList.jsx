import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux/es/exports";
//컴포넌트
import Button from "../../../elems/Button";
import { __deleteComment } from "../../../redux/modules/commentSlice";

// 상세페이지에 댓글 list 컴포넌트
const DetailCommentList = ({ commentData }) => {
  const myNick = useSelector((state) => state.login.user.nickname);
  const dispatch = useDispatch();
  const checkMyComment = commentData?.User?.nickname === myNick;

  // 댓글 삭제 이벤트
  const deleteComment = () => {
    dispatch(
      __deleteComment({ commentId: commentData.id, postId: commentData.PostId })
    );
  };
  return (
    <>
      <WrapComment>
        <h3>{commentData?.User?.nickname}</h3>
        <span>{commentData.createdAt}</span>
      </WrapComment>
      <CommentText>
        <pre>{commentData?.comment}</pre>
      </CommentText>
      {checkMyComment ? (
        <WrapBtn>
          <div>
            <Button size="size2" bgcolor="blue" color="white">
              수정
            </Button>
            <Button
              size="size2"
              border="blue"
              onClick={() => {
                deleteComment();
              }}
            >
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
  pre {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
  }
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
