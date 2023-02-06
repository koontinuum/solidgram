import React from "react";
import Post from "./post/Post";
import css from "./Posts.module.css";
function Posts() {
  return (
    <div className={css.posts}>
      <Post />
      <hr />
    </div>
  );
}

export default Posts;
