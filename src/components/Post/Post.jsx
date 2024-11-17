import styles from "./Post.module.css";

function Post({ title, body }) {
  return (
    <div className={styles.post__content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </div>
  );
}

export default Post;
