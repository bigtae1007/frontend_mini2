import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../shared/api";

// thunk 함수

// 메인 페이지 로드
export const __loadPost = createAsyncThunk("post/LOAD_POST", async () => {
  // const response = await axios.get("http://localhost:4000/list");

  const response = await api.get("/api/posts");

  return response.data;
});
// 포스트 추가하기
export const __addPost = createAsyncThunk(
  "post/ADD_POST",
  async (payload, thunkAPI) => {
    // const response = await axios.post("http://localhost:4000/list", payload);

    const response = await api.post("/api/post", payload);
    console.log(response.data);
    // return response.data;
  }
);

// 포스트 수정하기
export const __editPost = createAsyncThunk(
  "post/EDIT_MEMO",
  async (payload, thunkAPI) => {
    console.log(payload);
    // const response = await axios.put("http://localhost:4000/list", payload);
    const response = await api.put(`api/post/${payload.id}`, payload);
    console.log(response.data.id);
    console.log(response.data);
    return response.data;
  }
);

// 포스트 삭제하기
export const __deletePost = createAsyncThunk(
  "post/DELETE_MEMO",
  async (payload, thunkAPI) => {
    // const response = await axios.delete("http://localhost:4000/list", payload);
    await api.delete(`/api/post/${payload}`);
    // console.log(payload);
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
        // 임의로 빈 배열 집어넣기
        // action.payload.Comments = [];

        state.list = [...state.list, action.payload];
      })

      // 포스트 수정하기
      .addCase(__editPost.fulfilled, (state, action) => {
        // console.log(state.list, action);
        state.loading = false;
        const newList = state.list.map((v, i) => {
          if (v.id === action.payload.id) {
            // 데이터 얘기해서 삭제하기
            // action.payload.Comments = [];
            //
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
