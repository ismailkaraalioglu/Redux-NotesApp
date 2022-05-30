import React from "react";
import styles from "./style.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NotesApp</h1>
    </header>
  );
}

export default Header;
