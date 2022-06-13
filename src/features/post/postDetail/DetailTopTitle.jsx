import React from "react";
import styled from "styled-components";

//컴포넌트
import DetailStack from "./DetailStack";
import logo from "../../../logo.svg";
import ReactImg from "../../../images/category_img/React.png";
import JavaImg from "../../../images/category_img/Java.png";
import NodeImg from "../../../images/category_img/Node.png";
import VueImg from "../../../images/category_img/Vue.png";
import JsImg from "../../../images/category_img/JavaScript.png";

export default function DetailTopTile({ titleText, img, createdAt }) {
  return (
    <WrapTitle>
      <TitleImg
        src={
          img === "React"
            ? ReactImg
            : img === "Java"
            ? JavaImg
            : img === "Node"
            ? NodeImg
            : img === "Vue"
            ? VueImg
            : img === "JavaScript"
            ? JsImg
            : logo
        }
        alt="stack 이미지"
      />

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
