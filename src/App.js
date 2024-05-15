import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BiasRec from "./pages/BiasRec";
import Chat from "./pages/Chat";
import MyPage from "./pages/MyPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="@:username">
        <Route index element={<BiasRec />} />
        <Route index element={<Chat />} />
        <Route index element={<MyPage />} />
      </Route>
    </Routes>
  );
};

export default App;
