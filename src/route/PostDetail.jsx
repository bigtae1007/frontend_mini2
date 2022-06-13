import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// 컴포넌트
import DetailAddComment from "../features/post/postDetail/DetailAddComment";
import DetailSideMenu from "../features/post/postDetail/DetailSideMenu";
import DetailTopTile from "../features/post/postDetail/DetailTopTitle";
import DetailCommentList from "../features/post/postDetail/DetailCommentList";
export default function PostDetail() {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);

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
        <DetailSideMenu user={data.User} />
      </DetailContent>

      <DetailAddComment postId={data.id} />
      <DetailCommentList />
      <DetailCommentList />
      <DetailCommentList />
      <DetailCommentList />
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
