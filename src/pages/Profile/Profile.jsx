import { useContext, useEffect, useState } from "react";
import ApiContext from "../../context/api.js";
import styles from "./Profile.module.css";
import useApi from "../../hooks/useApi.js";
import Loader from "../../components/Loader/Loader.jsx";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./profileSlice.js";

function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.data);
  const usersLoading = useSelector((state) => state.users.loading);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUsers());
    }
  }, []);

  // let { isLoading, data } = useApi("api.getUser");

  return (
    <div className={styles.profile}>
      {usersLoading === "loading" && usersLoading === "idle" ? (
        <Loader />
      ) : usersLoading === "failed" ? (
        "Server Error"
      ) : (
        <ProfileInfo
          name={user?.name}
          username={user?.username}
          email={user?.email}
          street={user?.address.street}
          suite={user?.address.suite}
          city={user?.address.city}
        />
      )}
    </div>
  );
}

export default Profile;
