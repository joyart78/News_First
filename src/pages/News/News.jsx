import { useContext, useEffect, useState } from "react";
import Post from "../../components/Post/Post.jsx";
import style from "./News.module.css";
import useApi from "../../hooks/useApi.js";
import Loader from "../../components/Loader/Loader.jsx";

function News() {
  let { isLoading, data } = useApi("posts.all");

  return (
    <div className={style.posts}>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))
      )}
    </div>
  );
}

export default News;
