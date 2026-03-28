import { useState } from "react";
import ARSLandingPage from "./components/ARSLandingPage";
import ARSBlogPlatform from "./components/blog";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  return currentPage === "landing" ? (
    <ARSLandingPage onNavBlog={() => setCurrentPage("blog")} />
  ) : (
    <ARSBlogPlatform onNavHome={() => setCurrentPage("landing")} />
  );
}
