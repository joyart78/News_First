import { useContext, useEffect, useState } from "react";
import ApiContext from "../../context/api.js";
import styles from "./Profile.module.css";
import useApi from "../../hooks/useApi.js";
import Loader from "../../components/Loader/Loader.jsx";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo.jsx";

function Profile() {
  let { isLoading, data } = useApi("api.getUser");

  return (
    <div className={styles.profile}>
      {isLoading ? (
        <Loader />
      ) : (
        <ProfileInfo
          name={data.name}
          username={data.username}
          email={data.email}
          street={data.address.street}
          suite={data.address.suite}
          city={data.address.city}
        />
      )}
    </div>
  );
}

export default Profile;
