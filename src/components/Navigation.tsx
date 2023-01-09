import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/extra.module.css";
import { TabManager } from "./TabManager";

const TABS = [
  { label: "Home", value: 1 },
  { label: "About", value: 2 },
  { label: "Projects", value: 3 },
];

function Navigation() {
  const router = useRouter();
  const onclicklink = (link: string) => {
    router.push(link);
  };

  const [activeTab, handleTab] = useState(1);

  return (
    <div className={styles.navigation}>
      <h1 className={styles.title}>AS.</h1>
      <div style={{display: 'flex', overflow: 'hidden'}}>
        <TabManager tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
        <div
          className={styles.listitem}
          onClick={() => {
            onclicklink(
              "https://drive.google.com/file/d/19-OCj7saqcX63GYw3KoSi7UBZG3w_W-L/view?usp=sharing"
            );
          }}
        >
          Resume
        </div>
      </div>
    </div>
  );
}

export default Navigation;
