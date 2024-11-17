import { useContext, useEffect, useState } from "react";
import ApiContext from "../../context/api.js";
import Post from "../../components/Post/Post.jsx";
import style from "./News.module.css";

function News() {
  const api = useContext(ApiContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .all()
      .then((response) => {
        setPosts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  let itemsElem = posts.map((post) => (
    <Post key={post.id} title={post.title} body={post.body} />
  ));

  return (
    <div className={style.posts}>
      {loading ? (
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
