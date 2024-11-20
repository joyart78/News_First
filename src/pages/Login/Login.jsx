import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import styles from "./Login.module.css";
import { useState } from "react";
import verification from "../../auth/verification.js";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const [error, setError] = useState("");

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;
    const password = form.password.value;

    if (verification(user, password)) {
      signin(user, () => navigate(fromPage, { replace: true }));
    } else {
      form.username.value = "";
      form.password.value = "";
      setError("вы ввели неправильный логин или пароль");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className={styles.login}>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__input}>
          <label className={styles.form__label}>
            Name :
            <input type="text" name={"username"} className={styles.input} />
          </label>
          <label className={styles.form__label}>
            Password :
            <input type="password" name={"password"} className={styles.input} />
          </label>
        </div>
        <button type="submit" className={styles.submit_btn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
