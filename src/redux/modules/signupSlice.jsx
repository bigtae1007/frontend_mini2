import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

// // thunk 함수

// 회원가입

export const __signup = createAsyncThunk(
  "signup/SIGNUP_LOG",
  async (payload, thunkAPI) => {
    const aa = await api.post("/posts", payload);
    const response = {
      result: true,
    };

    alert("회원가입이 완료됐습니다.");
    return response.result;
  }
);

// 아이디 중복확인
export const __checkUsername = createAsyncThunk(
  "signup/CHECKID_LOG",
  async (payload, thunkAPI) => {
    // const aa = await api.get(`/posts/${payload}`);
    const aa = await api.get(`/posts/${"36"}`);
    const response = {
      result: true,
    };
    return response;
  }
);

// 닉네임 중복확인
export const __checkNickname = createAsyncThunk(
  "signup/CHECKNICK_LOG",
  async (payload, thunkAPI) => {
    const aa = await api.get(`/posts/${"36"}`);
    // const aa = await api.get(`/posts/${payload}`);
    const response = {
      result: true,
    };
    return response;
  }
);

// // slice

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    success: false,
    checkName: false,
    checkNick: false,
    checkMsg: "",
  },
  // 리듀서를 작성 할 필요는 없었다.
  reducers: {},

  extraReducers: (builder) => {
    builder
      // 회원가입 하기
      .addCase(__signup.fulfilled, (state, action) => {
        state.success = action.payload;
      })

      // 아이디 중복검사
      .addCase(__checkUsername.fulfilled, (state, action) => {
        state.checkName = action.payload;
      })

      // 닉네임 중복검사
      .addCase(__checkNickname.fulfilled, (state, action) => {
        state.checkNick = action.payload;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = signupSlice.actions;
export default signupSlice.reducer;
