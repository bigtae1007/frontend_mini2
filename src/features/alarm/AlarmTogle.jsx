import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// 컴포넌트
import Button from "../../elems/Button";

const AlarmTogle = ({ setTogleState, countNewAlarm, alarmList }) => {
  const navigate = useNavigate();

  const locatePost = (postId) => {
    setTogleState(false);
    navigate(`/post/detail/${postId}`);
  };

  return (
    <WrapTogle>
      <h3>
        {alarmList.nickname} 님의 새로운 소식{" "}
        <span>{countNewAlarm(alarmList.alarm)}개</span>
      </h3>
      <WrapAlarmCardList>
        {alarmList.alarm.map((v, l) => {
          return (
            <AlarmCard
              key={l}
              check={v.state}
              onClick={() => {
                locatePost(v.PostId);
              }}
            >
              <p>
                {v.commentUser ? v.commentUser : v.likeUser}님이 회원님의
                게시물에{" "}
                {v.type === "comment" ? (
                  <CommentText>댓글을 달았습니다.</CommentText>
                ) : (
                  <LikeText>좋아요를 눌렀습니다.</LikeText>
                )}
              </p>
            </AlarmCard>
          );
        })}
      </WrapAlarmCardList>
      <Button
        size="size2"
        color="blueD"
        bgcolor="blueL"
        onClick={() => {
          setTogleState(false);
        }}
      >
        닫기
      </Button>
    </WrapTogle>
  );
};

export default AlarmTogle;

const WrapTogle = styled.div`
  position: absolute;
  top: 70px;
  right: 123px;
  width: 330px;
  height: 550px;
  padding: 20px 10px;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 2px 4px 3px 3px #aaa;
`;

const WrapAlarmCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 400px;
  margin: 10px auto 20px;
  text-align: left;
  overflow-y: auto;
`;

const AlarmCard = styled.div`
  border-top: 1px solid var(--greyD);
  background-color: var(--grey);
  background-color: ${({ check }) => (check ? "var(--grey)" : "var(--greyD)")};
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const CommentText = styled.span`
  color: blue;
`;
const LikeText = styled.span`
  color: #9c4e4e;
`;
