import React from "react";
import styled from "styled-components";

export default function DetailSideMenu() {
  return (
    <>
      <SideMenuDiv>
        <div>
          <span>작성자 : </span> <span>Monkey</span>
        </div>
        <div>
          <span>달린 답변 : </span> <span>31</span>
        </div>

        <p>like : 20</p>
        <p>해결 완료</p>
      </SideMenuDiv>
    </>
  );
}

const SideMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  width: 30%;
  min-width: 130px;
  padding: 30px 20px;

  border-left: 1px solid var(--grey);
  word-break: break-all;
`;
