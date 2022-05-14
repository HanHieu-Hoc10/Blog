import React, { Component } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./containers/About";
import Post from "./containers/Post";
import AllPosts from "./components/AllPosts";
import Register from "./components/Register";
import Login from "./components/Login";
import PostBlog from "./components/Blog/PostBlog";
import BlogDetail from "./components/Blog/BlogDetail";
import CommentBlog from "./components/Blog/CommentBlog";
import Headerr from "./components/Headerr";
import MainPage from "./pages";
import PageNotFound from "./pages/404";

class App extends Component {
  render() {
    return (
      // <Router>
      <div className="App">
        {/* <Header />
          <Hero /> */}
        {/* <Link to={"/register"}>tjkskjfsafn</Link> */}

        <div className="container">
          <Headerr />

          <Routes>
            <Route path="/" element={<Login />}>
              {/* <Route index element={<CommentBlog />} />
              <Route path="dang-ky" element={<Register />}>
                <Route path=":dang-ky" element={<Register />} />
                <Route path="new" element={<BlogDetail />} />

                <Route path="dang-tin" element={<PostBlog />} />
                <Route path=":dang-tin" element={<PostBlog />} />
                <Route index element={<CommentBlog />} />
              </Route> */}
            </Route>
          </Routes>
        </div>
      </div>
      // </Router>
    );
  }
}

export default App;
