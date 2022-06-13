import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

// thunk 함수

// 회원가입

export const __signup = createAsyncThunk(
  "signup/SIGNUP_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/user/signup", payload);
    console.log(response);

    alert("회원가입이 완료됐습니다.");
    return response.data.result;
  }
);

// 아이디 중복확인
export const __checkUsername = createAsyncThunk(
  "signup/CHECKID_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get(`/user/email/${payload}`);
    if (!response.data.result) alert("동일한 아이디가 존재합니다");
    return response.data.result;
  }
);

// 닉네임 중복확인
export const __checkNickname = createAsyncThunk(
  "signup/CHECKNICK_LOG",
  async (payload, thunkAPI) => {
    console.log(payload);
    const response = await api.get(`/user/nickname/${payload}`);
    console.log(response);
    if (!response.data.result) alert("동일한 닉네임이 존재합니다");
    return response.data.result;
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
  reducers: {
    changeCheckName: (state, payload) => {
      state.checkName = false;
    },
    changeCheckNick: (state) => {
      state.checkNick = false;
    },
  },

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
      .addCase(__checkUsername.rejected, (state, action) => {
        state.checkName = true;
      })

      // 닉네임 중복검사
      .addCase(__checkNickname.fulfilled, (state, action) => {
        state.checkNick = action.payload;
      })
      .addCase(__checkNickname.rejected, (state, action) => {
        state.checkNick = true;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const { changeCheckName, changeCheckNick } = signupSlice.actions;
export default signupSlice.reducer;
