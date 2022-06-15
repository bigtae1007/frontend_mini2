import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// axios 기본 세팅
import { api } from "../../shared/api";

// // thunk 함수

// 로그인
export const __login = createAsyncThunk(
  "log/LOGIN_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/user/login", payload);
    // 토큰 localstorge 저장하기
    localStorage.setItem("token", response.data.token);
    // 로그인 상태 값 {true / false}
    return response.data;
  }
);
// 재 접속시 토큰 유효기간 확인
export const __checkToken = createAsyncThunk(
  "__checkToken/CHECK_LOG",
  async (payload, thunkAPI) => {
    // 토큰으로 유효값 확인하기
    const response = await api.get("/auth");
    // 상태값 true / false
    return response.data;
  }
);

// // slice

const loginSlice = createSlice({
  name: "login",
  initialState: {
    // 초기값, 유저 닉네임 로그인 상태
    // 전체 loading, error 값 저장
    user: { nickName: "", result: false },
    loading: false,
    error: null,
  },
  reducers: {
    // 로그 아웃시 상태값 초기화
    logOutUser: (state, payload) => {
      state.user = { nickName: "", result: false };
    },
  },
  //
  extraReducers: (builder) => {
    builder

      //로그인
      .addCase(__login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          nickName: action.payload.nickname,
          result: action.payload.result,
        };
      })
      // 토큰 확인하기
      .addCase(__checkToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      // 전체 모듈 요청 시, 실패 시
      // 요청시 loading 상태 true
      .addDefaultCase((state, action) => {
        if (action.meta?.requestStatus === "pending") {
          state.loading = true;
        }
        // 실패시 loading상태 false, error 메세지 저장
        if (action.meta?.requestStatus === "rejected") {
          state.loading = false;
          state.error = action.error.message;
        }
        // 성공시 loading 상태 false
        if (action.meta?.requestStatus === "fulfilled") {
          state.loading = false;
        }
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const { logOutUser } = loginSlice.actions;
export default loginSlice.reducer;
