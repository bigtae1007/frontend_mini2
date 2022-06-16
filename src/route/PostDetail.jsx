import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
// 컴포넌트
import DetailAddComment from "../features/post/postDetail/DetailAddComment";
import DetailSideMenu from "../features/post/postDetail/DetailSideMenu";
import DetailTopTile from "../features/post/postDetail/DetailTopTitle";
import DetailCommentList from "../features/post/postDetail/DetailCommentList";
import { __getCommentList } from "../redux/modules/commentSlice";
import { __getLikeList } from "../redux/modules/likeSlice";
import { __loadPost } from "../redux/modules/postSlice";

export default function PostDetail() {
  const commentList = useSelector((state) => state.comment.comments);
  const postList = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  // link으로 메인에서 데이터 전달받기
  // const data = location.state.data;

  const newPostData = postList.list.filter((v) => v.id === Number(id));

  // console.log(data);
  useEffect(() => {
    if (newPostData[0] === undefined) {
      dispatch(__loadPost());
    }
  }, []);

  useEffect(() => {
    if (newPostData[0]) {
      dispatch(__getCommentList({ id: newPostData[0]?.id }));
      dispatch(__getLikeList({ id: newPostData[0]?.id }));
    }
  }, [newPostData[0]]);

  return (
    <WrapDetailPost>
      <DetailTopTile
        titleText={newPostData[0]?.title}
        img={newPostData[0]?.img}
        createdAt={newPostData[0]?.createdAt}
      />
      <DetailContent>
        <ContentDiv>
          <pre>{newPostData[0]?.content}</pre>
        </ContentDiv>
        <DetailSideMenu user={newPostData[0]?.User} data={newPostData[0]} />
      </DetailContent>

      <DetailAddComment postId={newPostData[0]?.id} />
      {commentList?.map((v, l) => {
        return <DetailCommentList key={v.id} commentData={v} />;
      })}
    </WrapDetailPost>
  );
}

const WrapDetailPost = styled.div`
  width: 70%;
  min-width: 480px;
  margin: 0 auto;
`;

const DetailContent = styled.div`
  display: flex;
  border-bottom: 1px solid var(--grey);
`;
const ContentDiv = styled.div`
  width: 75%;
  padding: 30px 20px;
  text-align: left;
  & > pre {
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
  }
`;
