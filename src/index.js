import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";
import AllPosts from "./components/AllPosts";
import CommentBlog from "./components/Blog/CommentBlog";
import PostBlog from "./components/Blog/PostBlog";
import BlogDetail from "./components/Blog/BlogDetail";
import Register from "./components/Register";
import * as serviceWorker from "./serviceWorker";
// import PostBlog from "./components/Blog/PostBlog";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="binh-luan" element={<CommentBlog />} />
        <Route path="bai-dang" element={<AllPosts />} />
        <Route path="blog-detail" element={<BlogDetail />} />
        <Route path="dang-tin-moi" element={<PostBlog />} />
        <Route path="dang-ky" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
