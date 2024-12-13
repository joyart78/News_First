import styles from "./ProfileInfo.module.css";

export default function ProfileInfo({
  name,
  username,
  email,
  street,
  suite,
  city,
}) {
  return (
    <div>
      <div className={styles.info}>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Address:</strong> {street}, {suite}, {city}
        </p>
      </div>
    </div>
  );
}
