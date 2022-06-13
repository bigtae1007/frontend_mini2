import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function DetailSideMenu() {
  const user_data = useSelector((state) => state.login.user.nickName);
  console.log(user_data);
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
        <EditBtn>Edit</EditBtn>
        <DeleteBtn>Delete</DeleteBtn>
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

const EditBtn = styled.button`
  width: 80px;
  border: none;
  margin: 0 auto;
  padding: 3px 5px;
  border-radius: 10px;
  background-color: var(--green);
  color: white;
`;

const DeleteBtn = styled.button`
  margin: 0 auto;
  width: 80px;
  border: none;
  padding: 3px 5px;
  border-radius: 10px;
  background-color: var(--red);
  color: white;
`;
