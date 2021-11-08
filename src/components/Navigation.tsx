import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/extra.module.css";
import { changeStep } from "../features/step";

const data = [
  { key: 0, name: "Home" },
  { key: 1, name: "About" },
  { key: 2, name: "Projects" },
  { key: 3, name: "Resume" }
];

function Navigation() {

  const dispatch = useDispatch();

  return (
    <div className={styles.navigation}>
      <h1 className={styles.title}>AS.</h1>
      <ul className={styles.list}>
          {data.map((item) => (<li className={styles.listitem} onClick={() => {dispatch(changeStep(item.name))}} key={item.key}>{item.name}</li>))}
      </ul>
    </div>
  );
}

export default Navigation;
