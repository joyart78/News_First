import { useContext, useEffect, useState } from "react";
import Post from "../../components/Post/Post.jsx";
import style from "./News.module.css";
import useApi from "../../hooks/useApi.js";

function News() {
  let { isLoading, data } = useApi("posts.all");

  return (
    <div className={style.posts}>
      {isLoading ? (
        <div className={style.container}>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
        </div>
      ) : (
        data.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))
      )}
    </div>
  );
}

export default News;
