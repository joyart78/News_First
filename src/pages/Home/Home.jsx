import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <p>
        Welcome to the blog where every word is a step toward your goals and new
        discoveries!
      </p>
      <p>
        Here, you'll find information on trending topics, learn practical life
        hacks that truly work, and gain motivation for your own achievements.
      </p>
    </div>
  );
}

export default Home;
