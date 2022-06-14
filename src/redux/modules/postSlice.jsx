import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../shared/api";

// thunk 함수

// 메인 페이지 로드
export const __loadPost = createAsyncThunk("post/LOAD_POST", async () => {
  const response = await api.get("/api/posts");

  return response.data;
});

// 포스트 추가하기
export const __addPost = createAsyncThunk(
  "post/ADD_POST",
  async (payload, thunkAPI) => {
    const response = await api.post("/api/post", payload);

    return response.data;
  }
);

// 포스트 수정하기
export const __editPost = createAsyncThunk(
  "post/EDIT_MEMO",
  async (payload, thunkAPI) => {
    console.log(payload);
    const response = await api.put(`api/post/${payload.id}`, payload);

    return response.data;
    // 수정할 post id 값과 수정할 내용을 요청하면 백에서 시간, 닉네임 등을 같이 respose
  }
);

// 포스트 삭제하기
export const __deletePost = createAsyncThunk(
  "post/DELETE_MEMO",
  async (payload, thunkAPI) => {
    await api.delete(`/api/post/${payload}`);

    return payload;
    // 삭제시 삭제 할 post id값만 받아옴 데이터 베이스와 따로 삭제 !
  }
);

// slice
const postSlice = createSlice({
  name: "post",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      //메인 페이지 로드
      .addCase(__loadPost.fulfilled, (state, action) => {
        state.loading = false;

        state.list = action.payload;
      })

      // 포스트 추가 작성하기
      .addCase(__addPost.fulfilled, (state, action) => {
        state.loading = false;

        state.list = [...state.list, action.payload];
      })

      // 포스트 수정하기
      .addCase(__editPost.fulfilled, (state, action) => {
        state.loading = false;
        const newList = state.list.map((v, i) => {
          if (v.id === action.payload.id) {
            return action.payload;
          } else {
            return v;
          }
        });
        state.list = newList;
      })

      // 포스트 삭제하기
      .addCase(__deletePost.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);

        const delete_list = state.list.filter((v) => {
          return v.id === action.payload ? false : true;
        });
        state.list = delete_list;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = postSlice.actions;
export default postSlice.reducer;
