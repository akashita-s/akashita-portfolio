import React from "react";
import { useSelector } from "react-redux";
import Basic from "../../src/components/Basic";
import Github from "../../src/components/Github";
import SkillSet from "../../src/components/SkillSet";

function Step() {
  const currentStep = useSelector((state: any) => state.step.value);
  if (currentStep == "About")
    return (
      <React.Fragment>
        <SkillSet />
        <Github />
      </React.Fragment>
    );
  else
    return (
      <React.Fragment>
        <Basic />
      </React.Fragment>
    );
}

export default Step;
