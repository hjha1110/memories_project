import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/Post";
import { styles } from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <div>Posts</div>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
