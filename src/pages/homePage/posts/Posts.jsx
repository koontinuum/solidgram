import React, { useEffect, useState } from "react";
import Post from "./post/Post";
import css from "./Posts.module.css";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://63e5fd8683c0e85a868a7f54.mockapi.io/test")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className={css.posts}>
      {posts.map((item) => (
        <Post key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Posts;
