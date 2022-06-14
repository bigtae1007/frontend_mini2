import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../shared/api";

// thunk 함수

// 메인 페이지 로드
export const __loadPost = createAsyncThunk("post/LOAD_POST", async () => {
  const response = await api.get("/api/posts");

  // 전체 포스트 리스트
  return response.data;
});

// 포스트 추가하기
export const __addPost = createAsyncThunk(
  "post/ADD_POST",
  async (payload, thunkAPI) => {
    const response = await api.post("/api/post", payload);
    //추가한 포스트 하나의 Data

    return response.data;
  }
);

// 포스트 수정하기
export const __editPost = createAsyncThunk(
  "post/EDIT_MEMO",
  async (payload, thunkAPI) => {
    const response = await api.put(`api/post/${payload.id}`, payload);
    // 수정한 포스트 Data

    return response.data;
    // 수정할 post id 값과 수정할 내용을 요청하면 백에서 시간, 닉네임 등을 같이 respose
  }
);

// 포스트 삭제하기
export const __deletePost = createAsyncThunk(
  "post/DELETE_MEMO",
  async (payload, thunkAPI) => {
    await api.delete(`/api/post/${payload}`);

    //삭제할 포스트 ID값
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
    //로딩 완료 상태 값
    session: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      //메인 페이지 로드
      .addCase(__loadPost.fulfilled, (state, action) => {
        state.loading = false;
        // 리스트 전체 저장
        state.list = action.payload;
        state.session = true;
      })

      // 포스트 추가 작성하기
      .addCase(__addPost.fulfilled, (state, action) => {
        state.loading = false;

        // 저장된 list에서 작성된 포스트 추가하기
        state.list = [action.payload, ...state.list];
      })

      // 포스트 수정하기
      .addCase(__editPost.fulfilled, (state, action) => {
        state.loading = false;
        // id값을 비교해 수정한 포스트로 교체 저장
        const newList = state.list.map((v, i) => {
          if (Number(v.id) === Number(action.payload.id)) {
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

        // id값 비교해 삭제하기
        const delete_list = state.list.filter((v) => {
          return Number(v.id) === Number(action.payload) ? false : true;
        });
        state.list = delete_list;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = postSlice.actions;
export default postSlice.reducer;
