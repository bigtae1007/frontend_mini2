import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import Login from "./route/Login";
import Header from "./elems/Header";
import PostList from "./route/PostList";
import PostWrite from "./route/PostWrite";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post" element={<PostWrite />} />
      </Routes>
    </div>
  );
}

export default App;
