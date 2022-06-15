import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// axios 기본 세팅 API
import { api } from "../../shared/api";

// // thunk 함수

// 댓글 list 받아오기
export const __getCommentList = createAsyncThunk(
  "comment/GETCOMMENTLIST_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get(`/api/post/${[payload.id]}`);
    // 댓글 리스트
    console.log(response.data);
    return response.data.comment;
  }
);

// 댓글 추가
export const __addComment = createAsyncThunk(
  "comment/ADDCOMMENT_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post(`/api/post/${payload.postId}/comment`, {
      comment: payload.comment,
    });
    // 추가한 댓글 하나의 Data
    return response.data.fullComment;
  }
);

// 댓글 수정
export const __changeComment = createAsyncThunk(
  "comment/CHANGECOMMENT_LOG",
  async (payload, thunkAPI) => {
    const response = await api.put(
      `api/post/${payload.postId}/comment/${payload.commentId}`,
      {
        comment: payload.comment,
      }
    );
    return response.data;
  }
);

// 댓글 삭제
export const __deleteComment = createAsyncThunk(
  "comment/DELETECOMMENT_LOG",
  async (payload, thunkAPI) => {
    const response = await api.delete(
      `/api/post/${payload.postId}/comment/${payload.commentId}`
    );
    // 삭제 완료 msg alert 띄우기
    // 이렇게 처리할 필요는 없을 것 같다....
    if (response.request.status === 200) {
      alert(response.data.msg);
    }
    return payload;
  }
);

// // slice

const commentSlice = createSlice({
  name: "signup",
  initialState: {
    // 새로고침 시 에러 방지를 위한 초기값 설정
    comments: [
      {
        PostId: "2",
        UserId: 2,
        comment: "댓글\n\n\n\n\n\n\n테\n스\n트\n\n\n\n입\n니\n다",
        createdAt: "2022-06-13T10:35:12.534Z",
        id: 7,
        updatedAt: "2022-06-13T10:35:12.534Z",
      },
    ],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // 댓글 정보 가져오기
      .addCase(__getCommentList.fulfilled, (state, action) => {
        // 받아온 댓글 리스트 전체 받아오기
        state.comments = action.payload;
      })
      // 댓글 추가하기
      .addCase(__addComment.fulfilled, (state, action) => {
        // 기존 데이터에서 추가 댓글 넣기
        state.comments = [action.payload, ...state.comments];
      })
      // 댓글 수정하기
      .addCase(__changeComment.fulfilled, (state, action) => {
        const newCommentList = state.comments.map((v) => {
          return v.id === action.payload.id ? action.payload : v;
        });
        state.comments = newCommentList;
      })

      // 삭제하기
      .addCase(__deleteComment.fulfilled, (state, action) => {
        // id값 비교해서 삭제하기
        const newCommentList = state.comments.filter((v) => {
          return v.id === action.payload.commentId ? false : true;
        });
        state.comments = newCommentList;
      });
  },
});

// // reducer dispatch하기 위해 export 하기
export const {} = commentSlice.actions;
export default commentSlice.reducer;
