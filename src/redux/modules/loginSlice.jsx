import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../shared/api";

// // thunk 함수

// 로그인
export const __login = createAsyncThunk(
  "log/LOGIN_LOG",
  async (payload, thunkAPI) => {
    const aa = await api.post("/posts", payload);
    // 토큰 localStorge 저장하기 해야댐
    // 가상으로 받은 값
    const response = {
      result: true,
      nickName: "이건 별명이 들어가요",
    };
    return response;
  }
);

// // slice

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: { nickName: "", result: false },
    loading: false,
    error: null,
  },
  reducers: {},
  //
  extraReducers: (builder) => {
    builder

      //로그인
      .addCase(__login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      // 메모 추가하기
      // .addCase(__addMemo.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.text = [action.payload, ...state.text];
      // })

      // //메모 삭제하기
      // .addCase(__deleteMemo.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.text = state.text.filter((v, l) =>
      //     l === action.payload ? false : true
      //   );
      // })

      // // 메모 수정하기
      // .addCase(__changeMemo.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.text = state.text.map((v, l) => {
      //     if (l === action.payload.index) {
      //       v.text = action.payload.text;
      //       return v;
      //     } else {
      //       return v;
      //     }
      //   });
      // })

      //요청 시, 실패 시
      .addDefaultCase((state, action) => {
        if (action.meta?.requestStatus === "pending") {
          console.log("peding");
          state.loading = true;
        }
        if (action.meta?.requestStatus === "rejected") {
          console.log("reject");
          state.loading = false;
          state.error = action.error.message;
        }
        if (action.meta?.requestStatus === "fulfilled") {
          console.log("fulfilled");
          state.loading = false;
        }
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = loginSlice.actions;
export default loginSlice.reducer;
