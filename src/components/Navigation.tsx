import React from "react";
import styles from "../../styles/extra.module.css";

const data = [
  { key: 0, name: "Home" },
  { key: 1, name: "About" },
  { key: 2, name: "Projects" },
  { key: 3, name: "Resume" }
];

function Navigation() {
  return (
    <div className={styles.navigation}>
      <h1 className={styles.title}>AS.</h1>
      <ul className={styles.list}>
          {data.map((item) => (<li className={styles.listitem} key={item.key}>{item.name}</li>))}
      </ul>
    </div>
  );
}

export default Navigation;
