import React from "react";
import { DiReact, DiJavascript, DiHtml5, DiVisualstudio } from "react-icons/di";
import {
  SiCsswizardry,
  SiTailwindcss,
  SiGithub,
  SiPostman,
  SiFigma,
  SiRedux,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { CgLinear } from "react-icons/cg";
import styles from "../../styles/extra.module.css";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";

const data = [
  { key: 0, icon: <DiReact /> },
  { key: 1, icon: <SiCsswizardry /> },
  { key: 2, icon: <DiJavascript /> },
  { key: 3, icon: <BsBootstrap /> },
  { key: 4, icon: <DiHtml5 /> },
  { key: 5, icon: <SiTailwindcss /> },
];

const data2 = [
  { key: 0, icon: <DiVisualstudio /> },
  { key: 1, icon: <SiPostman /> },
  { key: 2, icon: <SiRedux /> },
  { key: 3, icon: <CgLinear /> },
  { key: 4, icon: <SiFigma /> },
  { key: 5, icon: <SiGithub /> },
];

function SkillSet() {
  return (
    <div className={styles.gitcontainer}>
      <h1>My Skill Set</h1>
      <motion.div
        initial={{ x: -600 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
        className={styles.iconcontainer}
      >
        {data.map((item) => (
          <div key={item.key} className={styles.iconbox}>
            <IconContext.Provider value={{ color: "white", size: "5em" }}>
              {item.icon}
            </IconContext.Provider>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
        className={styles.iconcontainer}
      >
        {data2.map((item) => (
          <div key={item.key} className={styles.iconbox}>
            <IconContext.Provider value={{ color: "white", size: "5em" }}>
              {item.icon}
            </IconContext.Provider>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillSet;
