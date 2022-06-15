import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../shared/api";
// // thunk 함수

// 좋아요 list 받아오기
export const __getLikeList = createAsyncThunk(
  "like/GETLIKELIST",
  async (payload, thunkAPI) => {
    const response = await api.get(`/api/post/${payload.id}`);
    return response.data.Likers;
  }
);

// 좋아요 추가
export const __addLike = createAsyncThunk(
  "like/ADDLIKE",
  async (payload, thunkAPI) => {
    const response = await api.patch(`/api/post/${payload}/like`);

    return response.data;
  }
);

// 좋아요 삭제
export const __deleteLike = createAsyncThunk(
  "like/DELETELIKE",
  async (payload, thunkAPI) => {
    const response = await api.delete(`/api/post/${payload}/like`);

    return response.data;
  }
);

// // slice

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likes: [
      {
        Like: {
          PostId: 107,
          UserId: 11,
          createdAt: "2022-06-15 11:36:23",
          updatedAt: "2022-06-15 11:36:23",
        },
        id: 11,
        nickname: "kim",
      },
    ],
  },
  // 리듀서를 작성 할 필요는 없었다.
  reducers: {},

  extraReducers: (builder) => {
    builder
      // 좋아요 정보 가져오기
      .addCase(__getLikeList.fulfilled, (state, action) => {
        state.likes = action.payload;
      })
      // 좋아요 추가하기
      .addCase(__addLike.fulfilled, (state, action) => {
        state.likes = [action.payload, ...state.likes];
      })
      //   삭제하기
      .addCase(__deleteLike.fulfilled, (state, action) => {
        const deleteLikeList = state.likes.filter((v) => {
          return v.nickname === action.payload.nickname ? false : true;
        });
        state.likes = deleteLikeList;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = likeSlice.actions;
export default likeSlice.reducer;
