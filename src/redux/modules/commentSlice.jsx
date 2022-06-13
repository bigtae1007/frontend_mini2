import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { api } from "../../shared/api";
// // thunk 함수

// 댓글 추가
export const __addComment = createAsyncThunk(
  "comment/ADDCOMMENT_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("posts", {
      comment: payload,
    });
    // await api.post(`/api/post/${postId}/comment`, { comment: payload });
    console.log(payload);
    console.log(response);
    return payload;
  }
);

// // slice

const commentSlice = createSlice({
  name: "signup",
  initialState: {},
  // 리듀서를 작성 할 필요는 없었다.
  reducers: {},

  extraReducers: (builder) => {
    builder
      // 회원가입 하기
      .addCase(__addComment.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.text = action.payload;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = commentSlice.actions;
export default commentSlice.reducer;
