import React from "react";
import { useSelector } from "react-redux";
import Basic from "../../src/components/Basic";
import Github from "../../src/components/Github";
import SkillSet from "../../src/components/SkillSet";
import styles from "../../styles/extra.module.css";
import Projects from "./Projects";

function Step() {
  const currentStep = useSelector((state: any) => state.step.value);
  if (currentStep == "About")
    return (
      <React.Fragment>
        <SkillSet />
        <Github />
        <h1>
          When I am not working I am usually busy completing reading challenges
          on GoodReads. Also I sometimes involve myself in painting.
        </h1>
        <h3 className={styles.link}>Some of my work &#8811;</h3>
      </React.Fragment>
    );
  else if (currentStep == "Projects") return <Projects />;
  else
    return (
      <React.Fragment>
        <Basic />
      </React.Fragment>
    );
}

export default Step;
