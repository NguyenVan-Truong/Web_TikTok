import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/Home/page";
import Profile from "@/pages/Profile/Page";
import Album from "@/pages/Album/page";
import Mailbox from "@/pages/Mailbox/page";
import ChatMail from "@/pages/ChatMailBox/page";
import StorePage from "@/pages/Store/page";
import AddPage from "@/pages/Addpage/page";
import Caption from "@/pages/Caption/page";
import FriendPage from "@/pages/Friends/page";
import Login from "@/pages/Login&Register/Login";
import Register from "@/pages/Login&Register/Register";
import ForgotPassword from "@/pages/Login&Register/ForgotPassword";
const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<FriendPage />} path="/friends" />
        <Route element={<StorePage />} path="/store" />
        <Route element={<AddPage />} path="/addpage" />
        <Route element={<Caption />} path="/caption" />
        <Route element={<Album />} path="/album" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Mailbox />} path="/mailbox" />
        <Route element={<ChatMail />} path="/chatmail" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<ForgotPassword />} path="/forgotPassword" />
      </Routes>
    </div>
  );
};

export default PageRouter;
