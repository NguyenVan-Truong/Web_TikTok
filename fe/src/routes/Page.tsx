import { Route, Routes } from "react-router-dom";

import Album from "@/pages/Album/page";
import HomePage from "@/pages/Home/page";
import Profile from "@/pages/Profile/Page";
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
      </Routes>
    </div>
  );
};

export default PageRouter;
