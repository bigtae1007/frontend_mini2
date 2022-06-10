import "./App.css";

import { Routes, Route } from "react-router-dom";

//컴포넌트
import Login from "./route/Login";
import Header from "./elems/Header";
import PostList from "./route/PostList";
import PostWrite from "./route/PostWrite";
import SignUp from "./route/SignUp";

//CSS
import GlobalStyle from "./elems/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post" element={<PostWrite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
