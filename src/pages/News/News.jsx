import { useContext, useEffect, useState } from "react";
import Post from "../../components/Post/Post.jsx";
import style from "./News.module.css";
import useApi from "../../hooks/useApi.js";

function News() {
  let { isLoading, data } = useApi("posts.all");

  let itemsElem = data.map((post) => (
    <Post key={post.id} title={post.title} body={post.body} />
  ));

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
        itemsElem
      )}
    </div>
  );
}

export default News;
