const Feedback = ({ feedbackCounts, totalFeedback }) => {
  const positive = Math.round((feedbackCounts.good / totalFeedback) * 100)
    return (
      <div>
        <p>Good: {feedbackCounts.good}</p>
        <p>Neutral: {feedbackCounts.neutral}</p>
        <p>Bad: {feedbackCounts.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positive}%</p>
      </div>
    );
  }

  export default Feedback;
