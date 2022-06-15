import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// axios 기본 세팅
import { api } from "../../shared/api";

// thunk 함수

// 회원가입
export const __signup = createAsyncThunk(
  "signup/SIGNUP_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/user/signup", payload);

    // 회원가입 성공 시 alert & 상태 저장
    alert("회원가입이 완료됐습니다.");
    return response.data.result;
  }
);

// 아이디 중복확인
export const __checkUsername = createAsyncThunk(
  "signup/CHECKID_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get(`/user/email/${payload}`);
    // 중복확인 결과에 따라 alert 후 상태 저장
    if (!response.data.result) alert("동일한 아이디가 존재합니다");
    return response.data.result;
  }
);

// 닉네임 중복확인
export const __checkNickname = createAsyncThunk(
  "signup/CHECKNICK_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get(`/user/nickname/${payload}`);
    // 중복확인 결과에 따라 alert 후 상태 저장
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
    // 아이디 중복확인 상태 변경 ( 중복 확인 후 아이디 변경 시 실행)
    changeCheckName: (state, payload) => {
      state.checkName = false;
    },
    // 닉네임 중복확인 상태 변경 ( 중복 확인 후 닉네임 변경 시 실행)
    changeCheckNick: (state) => {
      state.checkNick = false;
    },
  },

  extraReducers: (builder) => {
    builder
      // 회원가입 하기
      .addCase(__signup.fulfilled, (state, action) => {
        // 회원가입 상태 저장
        state.success = action.payload;
      })

      // 아이디 중복검사
      .addCase(__checkUsername.fulfilled, (state, action) => {
        // 중복확인 상태 저장
        state.checkName = action.payload;
      })
      // 에러로 중복확인 값 넘어왔을 때
      // 잘못된 방법인 것 같다........
      .addCase(__checkUsername.rejected, (state, action) => {
        state.checkName = true;
      })

      // 닉네임 중복검사
      .addCase(__checkNickname.fulfilled, (state, action) => {
        // 중복확인 상태 저장
        state.checkNick = action.payload;
      })
      // 에러로 중복확인 값 넘어왔을 때
      // 잘못된 방법인 것 같다........
      .addCase(__checkNickname.rejected, (state, action) => {
        state.checkNick = true;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const { changeCheckName, changeCheckNick } = signupSlice.actions;
export default signupSlice.reducer;
