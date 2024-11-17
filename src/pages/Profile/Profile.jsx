import { useContext, useEffect, useState } from "react";
import ApiContext from "../../context/api.js";
import styles from "./Profile.module.css";

function Profile() {
  const api = useContext(ApiContext);
  const [login, setLogin] = useState(false);

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.users
      .one()
      .then((response) => {
        setUser(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  console.log(user);

  return (
    <div className={styles.profile}>
      {loading ? (
        <div className={styles.container}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      ) : (
        <div>
          <div className={styles.info}>
            <p>
              <strong>Name:</strong>
              {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.suite}, {user.address.city}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
