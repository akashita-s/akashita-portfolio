import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/extra.module.css";
import { changeStep } from "../features/step";

const data = [
  { key: 0, name: "Home" },
  { key: 1, name: "About" },
  { key: 2, name: "Projects" }
];

function Navigation() {

  const dispatch = useDispatch();
  const router = useRouter();
  const onclicklink = (link: string) => {
    router.push(link);
  };

  return (
    <div className={styles.navigation}>
      <h1 className={styles.title}>AS.</h1>
      <ul className={styles.list}>
          {data.map((item) => (<li className={styles.listitem} onClick={() => {dispatch(changeStep(item.name))}} key={item.key}>{item.name}</li>))}
          <li className={styles.listitem} onClick={() => {onclicklink('https://drive.google.com/file/d/11N-GO8ddDCtKDh5AO0QQ45t9jhwQg7NH/view?usp=sharing')}}>Resume </li>
      </ul>
    </div>
  );
}

export default Navigation;
