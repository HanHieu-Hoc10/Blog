import React, { useState, useEffect } from "react";

import blogPost from "../../data/blog.json";

const BlogPost = (props) => {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find((post) => post.id == postId);
    setPost(post);
    setPostId(postId);
  }, [post, props.match.params.postId]);

  if (post.blogImage == "") return null;

  return (
    <div>
      <div className="blog-post-container">
        <h3 class="my-5">{post.blogTitle}</h3>
        <div className="post-thumb">
          <span class="blog-post-tag">{post.blogCategory}</span>
          <img src={post.blogImage} style={{ width: "100%" }} />
        </div>
        <div className="blog-post-text">
          <div>{post.blogText}</div>
          <p className="mt-5 text-muted">
            Posted on: {post.postedOn} by {post.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
