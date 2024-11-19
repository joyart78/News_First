import { useContext, useEffect, useState } from "react";
import ApiContext from "../../context/api.js";
import styles from "./Profile.module.css";
import useApi from "../../hooks/useApi.js";

function Profile() {
  let { isLoading, data } = useApi("users.one");

  return (
    <div className={styles.profile}>
      {isLoading ? (
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
              {data.name}
            </p>
            <p>
              <strong>Username:</strong> {data.username}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Address:</strong> {data.address.street},{" "}
              {data.address.suite}, {data.address.city}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
