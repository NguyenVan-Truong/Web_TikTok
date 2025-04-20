import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/Home/page";
import Profile from "@/pages/Profile/Page";
import Album from "@/pages/Album/page";
import Mailbox from "@/pages/Mailbox/page";
import ChatMail from "@/pages/ChatMailBox/page";
import StorePage from "@/pages/Store/page";
import AddPage from "@/pages/Addpage/page";
import Caption from "@/pages/Caption/page";
const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<StorePage />} path="/store" />
        <Route element={<AddPage />} path="/addpage" />
        <Route element={<Caption />} path="/caption" />
        <Route element={<Album />} path="/album" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Mailbox />} path="/mailbox" />
        <Route element={<ChatMail />} path="/chatmail" />
      </Routes>
    </div>
  );
};

export default PageRouter;
