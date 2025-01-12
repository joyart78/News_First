import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import CurrencyWidget from "../CurrencyWidget/CurrencyWidget.jsx";

const setActive = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.nav}`}>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
          <NavLink to="/news" className={setActive}>
            News
          </NavLink>
          <NavLink to="/profile" className={setActive}>
            Profile
          </NavLink>
          <NavLink to="/converter" className={setActive}>
            <CurrencyWidget />
          </NavLink>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
