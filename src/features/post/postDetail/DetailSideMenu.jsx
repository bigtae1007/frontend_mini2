import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import { __deletePost } from "../../../redux/modules/postSlice";

export default function DetailSideMenu({ user, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그인 유저 닉네임 가져오기
  const user_data = useSelector((state) => state.login.user.nickname);
  // 해당 포스트에 댓글 리스트 갯수를 위해 가져오기
  const commentList = useSelector((state) => state.comment.comments);

  // post id 를 위해 파라미터 값 가져오기
  const { id } = useParams();
  // 게시글 삭제하기

  const deletePost = () => {
    dispatch(__deletePost(id));
    navigate("/");
  };

  return (
    <>
      {user_data === user.nickname ? (
        <SideMenuDiv>
          <div>
            <span>작성자 : </span> <span>{user.nickname}</span>
          </div>
          <div>
            <span>달린 답변 : </span> <span>{commentList?.length}</span>
          </div>

          <p>like : 20</p>

          <Link to={`/post/modify/${id}`} state={{ data: data }}>
            <EditBtn>Edit</EditBtn>
          </Link>

          <DeleteBtn onClick={deletePost}>Delete</DeleteBtn>
        </SideMenuDiv>
      ) : (
        <SideMenuDiv>
          <div>
            <span>작성자 : </span> <span>{user.nickname}</span>
          </div>
          <div>
            <span>달린 답변 : </span> <span>{commentList?.length}</span>
          </div>

          <p>like : 20</p>
        </SideMenuDiv>
      )}
    </>
  );
}

const SideMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  width: 30%;
  min-width: 130px;
  padding: 30px 20px;

  border-left: 1px solid var(--grey);
  word-break: break-all;
`;

const EditBtn = styled.button`
  width: 80px;
  border: none;
  margin: 0 auto;
  padding: 3px 5px;
  border-radius: 10px;
  background-color: var(--green);
  color: white;
`;

const DeleteBtn = styled.button`
  margin: 0 auto;
  width: 80px;
  border: none;
  padding: 3px 5px;
  border-radius: 10px;
  background-color: var(--red);
  color: white;
`;
