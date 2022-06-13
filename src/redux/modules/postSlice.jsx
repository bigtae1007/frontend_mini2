import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../shared/api";

// thunk 함수

// 메인 페이지 로드
export const __loadPost = createAsyncThunk("post/LOAD_POST", async () => {
  // const response = await axios.get("http://localhost:4000/list");

  const response = await api.get("/api/posts");

  console.log(response);

  return response.data;
});
// 포스트 추가하기
export const __addPost = createAsyncThunk(
  "post/ADD_POST",
  async (payload, thunkAPI) => {
    // const response = await axios.post("http://localhost:4000/list", payload);

    const response = await api.post("/api/post", payload);

    console.log(response, "asd");

    return response.data;
  }
);

// // 포스트 수정하기
// export const __editPost = createAsyncThunk(
//   "memos/DELETE_MEMO",
//   async (payload, thunkAPI) => {
//     // const response = await axios.put("http://localhost:4000/list", payload);
//     const response = await api.put("/post", payload);
//     return response;
//   }
// );

// 포스트 삭제하기
export const __deletePost = createAsyncThunk(
  "memos/DELETE_MEMO",
  async (payload, thunkAPI) => {
    // const response = await axios.delete("http://localhost:4000/list", payload);
    await api.delete("/post", payload);

    return payload;
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

      // // 포스트 수정하기
      // .addCase(__editPost.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.list = state.list.map((v, i) => {
      //     if (i === action.payload.id) {
      //       v.list = action.payload.list;
      //       return v;
      //     } else {
      //       return v;
      //     }
      //   });
      // })

      // 포스트 삭제하기
      .addCase(__deletePost.fulfilled, (state, action) => {
        state.loading = false;

        state.list = state.list.filter((v, i) =>
          i === action.payload ? false : true
        );
      });
  },
});

// // slice

// const memosSlice = createSlice({
//   name: "memo",
//   initialState: {
//     text: [],
//     check: false,
//     loading: false,
//     error: null,
//   },
//   // 리듀서를 작성 할 필요는 없었다.
//   reducers: {},

//   /*만들어진 비동기 액션에 대한 리듀서는 아래와 같이 extraReducers로 작성할 수 있다.
//    extraReducers로 지정된 reducer는 외부 작업을 참조하기 위한 것이기 때문에 slice.actions에 생성되지 않는다.
//   또한, ActionReducerMapBuilder를 수신하는 콜백으로 작성하는 것이 권장된다.*/

//   // toolkit 장점 통신 상태를 자동으로 받아와 try ~ catch를 사용할 필요가 없다.
//   extraReducers: (builder) => {
//     builder
//

// // reducer dispatch하기 위해 export 하기
export const {} = postSlice.actions;
export default postSlice.reducer;
