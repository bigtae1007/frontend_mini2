import React from "react";
import styled from "styled-components";

// 소 카테고리 화면 컴포넌트
export default function DetailStack({ createdAt }) {
  return (
    <>
      <WrapUnderTitle>
        <WrapStackList>
          <StackSpan>JavaScript</StackSpan>
          <StackSpan>React</StackSpan>
        </WrapStackList>
        <p>{createdAt}</p>
      </WrapUnderTitle>
    </>
  );
}

const WrapUnderTitle = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-right: 10px;
    color: var(--greyD);
    font-weight: 600;
  }
`;

const WrapStackList = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
`;

const StackSpan = styled.span`
  padding: 3px 5px;
  border-radius: 10px;
  background-color: var(--green);
  color: white;
`;
