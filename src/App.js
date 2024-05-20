import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Rec from "./pages/Rec";
import Chat from "./pages/Chat";
import MyPage from "./pages/MyPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/rec" element={<Rec />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default App;
