import { useContext, useEffect, useState } from "react";
import Post from "../../components/Post/Post.jsx";
import style from "./News.module.css";
import useApi from "../../hooks/useApi.js";
import Loader from "../../components/Loader/Loader.jsx";
import { fetchPosts } from "./newsSlice.js";
import { useDispatch, useSelector } from "react-redux";

function News() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.data);
  console.log(posts);
  const postsLoading = useSelector((state) => state.posts.loading);
  console.log(postsLoading);

  useEffect(() => {
    dispatch(fetchPosts());
    console.log(1);
  }, [dispatch]);

  // let { isLoading, data } = useApi("api.getAllPosts");

  return (
    <div className={style.posts}>
      {postsLoading === "loading" ? (
        <Loader />
      ) : postsLoading === "failed" ? (
        "Server Error"
      ) : (
        posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))
      )}
    </div>
  );
}

export default News;
