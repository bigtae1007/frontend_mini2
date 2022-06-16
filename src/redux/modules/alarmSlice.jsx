import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../shared/api";
// // thunk 함수

// 알림 메세지 받기
export const __getAlarmList = createAsyncThunk(
  "ALARM/GETALARM_LOG",
  async () => {
    const response = await api.get(`/api/alarm`);
    return response.data;
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
  reducers: {},

  extraReducers: (builder) => {
    builder
      // 알림 리스트 받아오기
      .addCase(__getAlarmList.fulfilled, (state, action) => {
        state.alarm = action.payload.alarm;
        state.nickname = action.payload.nickname;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = alarmSlice.actions;
export default alarmSlice.reducer;
