import React from "react";
import styled from "styled-components";

export default function DetailStack() {
  return (
    <>
      <WrapStackList>
        <StackSpan>JavaScript</StackSpan>
        <StackSpan>React</StackSpan>
      </WrapStackList>
    </>
  );
}

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
