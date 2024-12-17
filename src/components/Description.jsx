import React from "react";
import styles from "./Description.module.css";

const Description = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.Description}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Description;
