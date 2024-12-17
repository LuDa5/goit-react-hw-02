import React, { useState, useEffect } from "react";
import Feedback from "./Feedback.jsx";
import Options from "../components/Options.jsx";
import Description from "../components/Description.jsx";
import Notification from "../components/Notification.jsx";
import styles from "./App.module.css";

const App = () => {
  const [Feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("Feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Feedback", JSON.stringify(Feedback));
  }, [Feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = Feedback.good + Feedback.neutral + Feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((Feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={styles.app}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onLeaveFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Description
          good={Feedback.good}
          neutral={Feedback.neutral}
          bad={Feedback.bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
};

export default App;
