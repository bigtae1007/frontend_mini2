import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 소 카테고리 화면 컴포넌트
export default function DetailStack({ createdAt, hash }) {
  const [hashList, setHashList] = useState([]);
  useEffect(() => {
    if (hash) {
      if (hash[0]) setHashList(JSON.parse(hash[0]?.hash));
    }
  }, [hash]);
  return (
    <>
      <WrapUnderTitle>
        <WrapStackList>
          {hashList?.map((v, l) => {
            return <StackSpan key={l}># {v}</StackSpan>;
          })}
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
    width: 250px;
    margin-right: 10px;
    color: var(--greyD);
    font-weight: 600;
  }
`;

const WrapStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 10px;
`;

const StackSpan = styled.span`
  padding: 3px 5px;
  border-radius: 10px;
  background-color: var(--greyD);
  color: white;
`;
