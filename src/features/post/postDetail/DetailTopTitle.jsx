import React from "react";
import styled from "styled-components";

//컴포넌트
import DetailStack from "./DetailStack";
import logo from "../../../logo.svg";

export default function DetailTopTile() {
  return (
    <WrapTitle>
      <TitleImg src={logo} alt="stack 이미지" />

      <div>
        <TitleDiv>
          질문에 핵심을 담은 제목이 들어가야지 얼마나 어렵다고 생생내고 있어
          알아서 검색해서 풀어 질문하지마 !!!
        </TitleDiv>

        <DetailStack />
      </div>
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
  font-size: 1.25rem;
  font-weight: bolder;
`;
