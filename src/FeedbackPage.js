import React from 'react';
import './feedback.css';

const FeedbackPage = () => {
  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Feedback Form</h1>
      <form className="feedback-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackPage;
