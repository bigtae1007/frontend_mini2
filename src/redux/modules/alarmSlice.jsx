import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../shared/api";
// // thunk 함수

// 알림 메세지 받기
export const __getAlarmList = createAsyncThunk(
  "ALARM/GETALARM_LOG",
  async () => {
    const response = await api.get(`/api/alarm`);
    console.log(response);
    return response.data;
  }
);

// 알림 일괄 상태 초기화
export const __resetState = createAsyncThunk(
  "ALARM/RESETALARMSTATE_LOG",
  async () => {
    await api.put(`/api/alarm`);
  }
);

// // slice

const alarmSlice = createSlice({
  name: "like",
  initialState: {
    nickname: "bb",
    alarm: [
      {
        postId: 1,
        commentUse: "btae",
        likeUser: "좋아요 유저",
        commentUser: "댓글 유저",
        state: false,
        type: "comment",
      },
    ],
  },
  reducers: {
    // 읽은 알림 상태 변경
    changeAlarmState: (state, action) => {
      console.log(action.payload);
      const newAlarm = state.alarm.map((v) => {
        if (v.PostId === action.payload) {
          v.state = true;
        }
        return v;
      });
      console.log(newAlarm);
      state.alarm = newAlarm;
    },
  },

  extraReducers: (builder) => {
    builder
      // 알림 리스트 받아오기
      .addCase(__getAlarmList.fulfilled, (state, action) => {
        state.alarm = action.payload.alarm.reverse();
        state.nickname = action.payload.nickname;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const { changeAlarmState } = alarmSlice.actions;
export default alarmSlice.reducer;
