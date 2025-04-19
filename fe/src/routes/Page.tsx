import { Route, Routes } from "react-router-dom";

import BlogPage from "@/pages/blog";
import DocsPage from "@/pages/docs";
import HomePage from "@/pages/Home/page";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import Profile from "@/pages/Profile/Page";
import Album from "@/pages/Album/page";
const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<DocsPage />} path="/docs" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<Album />} path="/album" />
        <Route element={<Profile />} path="/profile" />
      </Routes>
    </div>
  );
};

export default PageRouter;
