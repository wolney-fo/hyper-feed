import styles from "./Header.module.css";

import logo from "../../assets/img/hyper-feed.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Hyper Feed" />
    </header>
  );
}
