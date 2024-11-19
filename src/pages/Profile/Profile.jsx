import { useContext, useEffect, useState } from "react";
import ApiContext from "../../context/api.js";
import styles from "./Profile.module.css";
import useApi from "../../hooks/useApi.js";
import Loader from "../../components/Loader/Loader.jsx";

function Profile() {
  let { isLoading, data } = useApi("users.one");

  return (
    <div className={styles.profile}>
      {isLoading ? (
        <Loader />
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
