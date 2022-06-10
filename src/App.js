import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//CSS
import GlobalStyle from "./elems/GlobalStyle";
//컴포넌트
import Login from "./route/Login";
import SignUp from "./route/SignUp";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
