import { useEffect, useState } from "react";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching feedback:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="page">Loading feedback...</div>;
  }

  return (
    <div className="page">
      <h1>Submitted Feedback</h1>

      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <div className="feedback-list">
          {feedbacks.map((feedback) => (
            <div className="feedback-card" key={feedback.id}>
              <h3>{feedback.name}</h3>

              <p>
                <strong>Email:</strong> {feedback.email}
              </p>

              <p>
                <strong>Event:</strong> {feedback.event}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {feedback.rating}/5
              </p>

              <p>
                <strong>Comments:</strong> {feedback.comments}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackList;