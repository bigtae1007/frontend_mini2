import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// // thunk 함수

// 회원가입

export const __signup = createAsyncThunk(
  "signup/SIGNUP_LOG",
  async (payload, thunkAPI) => {
    const response = await axios.post("http://localhost:4000/posts", payload, {
      headers: {},
    });
    return response;
  }
);

// 아이디 중복확인
export const __checkUsername = createAsyncThunk(
  "signup/CHECKID_LOG",
  async (payload, thunkAPI) => {
    console.log(payload);
    // const response = await axios.post("http://localhost:4000/posts", payload);
  }
);

// 닉네임 중복확인
export const __checkNickname = createAsyncThunk(
  "signup/CHECKNICK_LOG",
  async (payload, thunkAPI) => {
    console.log(payload);
    // const response = await axios.post("http://localhost:4000/posts", payload);
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
        console.log(action.payload);
        // state.text = action.payload;
      })

      // 아이디 중복검사
      .addCase(__checkUsername.fulfilled, (state, action) => {
        //payload로 변경해야댐
        state.checkName = true;
      })

      // 닉네임 중복검사
      .addCase(__checkNickname.fulfilled, (state, action) => {
        //payload로 변경해야댐
        state.checkNick = true;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = signupSlice.actions;
export default signupSlice.reducer;
