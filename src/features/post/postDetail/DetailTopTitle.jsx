import React from "react";
import styled from "styled-components";

//컴포넌트
import DetailStack from "./DetailStack";
import logo from "../../../logo.svg";

export default function DetailTopTile({ titleText, img, createdAt }) {
  return (
    <WrapTitle>
      <TitleImg src={logo} alt="stack 이미지" />

      <WrapDib>
        <TitleDiv>{titleText}</TitleDiv>

        <DetailStack img={img} createdAt={createdAt} />
      </WrapDib>
    </WrapTitle>
  );
}

const WrapTitle = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--grey);
`;
const TitleImg = styled.img`
  width: 100px;
  height: 100px;
`;
const TitleDiv = styled.div`
  min-height: 60px;
  padding: 20px 0;
  font-size: 1.4rem;
  font-weight: bolder;
`;

const WrapDib = styled.div`
  width: 100%;
`;
