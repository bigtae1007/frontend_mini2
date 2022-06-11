import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// // thunk 함수

// 로그인
export const __login = createAsyncThunk(
  "log/LOGIN_LOG",
  async (payload, thunkAPI) => {
    const response = await axios.post(
      "http://localhost:4000/posts",
      payload,
      {}
    );
    // 토큰 localStorge 저장하기 해야댐
    console.log(response);

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
  // 리듀서를 작성 할 필요는 없었다.
  reducers: {},

  /*만들어진 비동기 액션에 대한 리듀서는 아래와 같이 extraReducers로 작성할 수 있다.
   extraReducers로 지정된 reducer는 외부 작업을 참조하기 위한 것이기 때문에 slice.actions에 생성되지 않는다.
  또한, ActionReducerMapBuilder를 수신하는 콜백으로 작성하는 것이 권장된다.*/

  // toolkit 장점 통신 상태를 자동으로 받아와 try ~ catch를 사용할 필요가 없다.
  extraReducers: (builder) => {
    builder

      //로그인
      .addCase(__login.fulfilled, (state, action) => {
        console.log(action.payload);
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
