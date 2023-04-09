import React from "react";
import styles from "./Header.module.scss";
import ThemeSwitcher from "../ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Tech Academy</div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
