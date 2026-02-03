import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Now from "./pages/Now.jsx";
import Tools from "./pages/Tools.jsx";
import Risk from "./pages/tools/Risk.jsx";
import Journal from "./pages/tools/Journal.jsx";
import Pomodoro from "./pages/tools/Pomodoro.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import Resume from "./pages/Resume.jsx";
import Proof from "./pages/Proof.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />

        <Route path="/now" element={<Now />} />

        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/risk" element={<Risk />} />
        <Route path="/tools/journal" element={<Journal />} />
        <Route path="/tools/pomodoro" element={<Pomodoro />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />

        <Route path="/resume" element={<Resume />} />
        <Route path="/proof" element={<Proof />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}