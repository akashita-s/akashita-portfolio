import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/tabs.module.css";
import { useDispatch } from "react-redux";
import { changeStep } from "../features/step";

export const TabManager = ({ activeTab, handleTab, tabs }: any) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className={styles.tabmanager}>
        {tabs.map(({ label, value }: any) => (
          <div
            key={tabs}
            className={`${styles.tab} ${
              value === activeTab ? styles.selectedtab : ""
            }`}
            onClick={() => {
              handleTab(value);
              dispatch(changeStep(label));
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

TabManager.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(Object).isRequired,
};
