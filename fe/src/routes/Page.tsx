import { Route, Routes } from "react-router-dom";

import BlogPage from "@/pages/blog";
import DocsPage from "@/pages/docs";
import HomePage from "@/pages/Home/page";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import Profile from "@/pages/Profile/Page";
const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<DocsPage />} path="/docs" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<Profile />} path="/profile" />
      </Routes>
    </div>
  );
};

export default PageRouter;
