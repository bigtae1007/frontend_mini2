import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { api } from "../../shared/api";
// // thunk 함수

// 댓글 list 받아오기
export const __getCommentList = createAsyncThunk(
  "comment/GETCOMMENTLIST_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get(`/api/post/${[payload.id]}`);
    return response.data;
  }
);

// 댓글 추가
export const __addComment = createAsyncThunk(
  "comment/ADDCOMMENT_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post(`/api/post/${payload.postId}/comment`, {
      comment: payload.comment,
    });
    return response.data.fullComment;
  }
);

// 댓글 삭제
export const __deleteComment = createAsyncThunk(
  "comment/DELETECOMMENT_LOG",
  async (payload, thunkAPI) => {
    const response = await api.delete(
      `/api/post/${payload.postId}/comment/${payload.commentId}`
    );
    if (response.request.status === 200) {
      alert(response.data.msg);
    }
    return payload;
  }
);

// // slice

const commentSlice = createSlice({
  name: "signup",
  initialState: {},
  // 리듀서를 작성 할 필요는 없었다.
  reducers: {
    comments: [
      {
        PostId: "2",
        UserId: 2,
        comment: "댓글\n\n\n\n\n\n\n테\n스\n트\n\n\n\n입\n니\n다",
        createdAt: "2022-06-13T10:35:12.534Z",
        id: 7,
        updatedAt: "2022-06-13T10:35:12.534Z",
      },
    ],
  },

  extraReducers: (builder) => {
    builder
      // 댓글 정보 가져오기
      .addCase(__getCommentList.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      // 댓글 추가하기
      .addCase(__addComment.fulfilled, (state, action) => {
        state.comments = [action.payload, ...state.comments];
      })
      // 삭제하기
      .addCase(__deleteComment.fulfilled, (state, action) => {
        const newCommentList = state.comments.filter((v) => {
          return v.id === action.payload.commentId ? false : true;
        });
        state.comments = newCommentList;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = commentSlice.actions;
export default commentSlice.reducer;
