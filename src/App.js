//패키지
import "./App.css";
import { Routes, Route } from "react-router-dom";
//CSS
import GlobalStyle from "./elems/GlobalStyle";
//컴포넌트
import Header from "./elems/Header";
import Login from "./route/Login";
import SignUp from "./route/SignUp";
import PostList from "./route/PostList";
import PostWrite from "./route/PostWrite";
import PostModify from "./route/PostModify";
import PostDetail from "./route/PostDetail";
import LoadingPage from "./elems/LoadingPage";
import { useSelector } from "react-redux";

function App() {
  const loginLoading = useSelector((state) => state.login.loading);
  const postLoading = useSelector((state) => state.post.loading);

  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      {loginLoading || postLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/" element={<PostList />} />
          <Route path="/post" element={<PostWrite />} />
          <Route path="/post/detail/:id" element={<PostDetail />} />
          <Route path="/post/modify/:id" element={<PostModify />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
