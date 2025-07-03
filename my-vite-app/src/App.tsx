import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import ExplorePage from "./pages/explore";
import PreferencesPage from "./pages/preferences";
import MatchResult from "./pages/matchResult";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ExplorePage />} path="/explore" />
      <Route element={<PreferencesPage />} path="/preferences" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<MatchResult/>} path="/matchResult" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
