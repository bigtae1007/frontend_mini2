import React from "react";
import styled from "styled-components";

export default function DetailSideMenu() {
  return (
    <>
      <SideMenuDiv>
        <p>
          작성자 <br />
          monkey
        </p>
        <p>like : 10</p>
        <p>up : 20</p>
        <p>asdasd</p>
      </SideMenuDiv>
    </>
  );
}

const SideMenuDiv = styled.div`
  width: 30%;
  padding: 30px 20px;

  border: 1px solid #000;
  word-break: break-all;
`;
