import { withRouter } from "next/router";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "../../styles/extra.module.css";

const labels = {
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  weekdays: [
    "Sun", // Sunday first!
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ],
  totalCount: "{{count}} contributions in {{year}}",
  color: "white",
  legend: {
    less: "Less",
    more: "More",
  },
};

function Github() {
  return (
    <div className={styles.gitcontainer}>
      <h1>My Contributions on GitHub</h1>
      <div className={styles.gitbox}>
        <GitHubCalendar
          username="akashita-s"
          color="orange"
          style={{ color: "white" }}
          labels={labels}
        />
      </div>
    </div>
  );
}

export default Github;
