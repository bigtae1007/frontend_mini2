import React, { useState } from "react";
import styled from "styled-components";
import DetailAddComment from "../features/post/postDetail/DetailAddComment";
import DetailSideMenu from "../features/post/postDetail/DetailSideMenu";
import DetailTopTile from "../features/post/postDetail/DetailTopTitle";

export default function PostDetail() {
  return (
    <WrapDetailPost>
      <DetailTopTile />
      <DetailContent>
        <ContentDiv>
          <pre>
            HTML 태그 중에 pre 태그는 그 내부에 있는 글을 있는 그대로 보여주는
            특징이 있습니다. 그래서 Code를 보여줄 때 pre 태그를 사용해서 쓰고
            <br />
            있는데요, 이게 한 라인이 길어지면 스크롤바를 만들어서
            <br />
            <br />
            보여주더라구요. ^^;;;; 사실 스크롤바를 보여줘도 상관은 없는데, 매번
            스크롤해서 보려니 귀찮기도 하고... 그냥 다른 태그들처럼 다음
            라인으로 개행을 해서 보여줘도 되는 것 같기도해서 방법을
            <br />
            <br />
            찾아봤습니다. 역시나 구글신이 친절히 알려주셨는데, 아래처럼 css의
            pre 태그 항목에 white-space: pre-wrap; 속성을 사용하면 됩니다. 좀
            <br />더 자세한 내용은
            <br />
            <br />
            <br />
            how-do-i-wrap-text-in-a-pre-tagasfasfhuihiujklj 을 참고하시면
            됩니다. packground-color: #E6E6FA;
            <br />
            padding:10px; overflow: autwhite-space: pre-wrap; /* pre
            <br />
            tag내에 word wrap출처: https://kkamagui.tistory.com/796
            <br />
            [kkamagui의 작업실:티스토리]
          </pre>
        </ContentDiv>
        <DetailSideMenu />
      </DetailContent>
      <DetailAddComment />
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
