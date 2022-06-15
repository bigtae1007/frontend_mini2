import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// 컴포넌트
import DetailAddComment from "../features/post/postDetail/DetailAddComment";
import DetailSideMenu from "../features/post/postDetail/DetailSideMenu";
import DetailTopTile from "../features/post/postDetail/DetailTopTitle";
import DetailCommentList from "../features/post/postDetail/DetailCommentList";
import { __getCommentList } from "../redux/modules/commentSlice";
import { __getLikeList } from "../redux/modules/likeSlice";

export default function PostDetail() {
  const commentList = useSelector((state) => state.comment.comments);

  const dispatch = useDispatch();
  const location = useLocation();
  // link으로 메인에서 데이터 전달받기
  const data = location.state.data;
  console.log(data);
  useEffect(() => {
    dispatch(__getCommentList({ id: data.id }));
  }, []);

  useEffect(() => {
    dispatch(__getLikeList({ id: data.id }));
  }, []);

  return (
    <WrapDetailPost>
      <DetailTopTile
        titleText={data.title}
        img={data.img}
        createdAt={data.createdAt}
      />
      <DetailContent>
        <ContentDiv>
          <pre>{data.content}</pre>
        </ContentDiv>
        <DetailSideMenu user={data.User} data={data} />
      </DetailContent>

      <DetailAddComment postId={data.id} />
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
  }
`;
