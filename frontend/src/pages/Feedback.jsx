import { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    rating: "",
    comments: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rating: Number(formData.rating),
        }),
      });

      if (response.ok) {
        setMessage("Feedback submitted successfully!");

        setFormData({
          name: "",
          email: "",
          event: "",
          rating: "",
          comments: "",
        });
      } else {
        setMessage("Failed to submit feedback.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Backend connection failed.");
    }
  };

  return (
    <div className="page">
      <h1>Event Feedback</h1>

      <form onSubmit={handleSubmit} className="feedback-form">

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        >
          <option value="">Select Event</option>
          <option value="Tech Conference 2026">
            Tech Conference 2026
          </option>
          <option value="AI Workshop">
            AI Workshop
          </option>
          <option value="Cultural Fest">
            Cultural Fest
          </option>
        </select>

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        >
          <option value="">Select Rating</option>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Very Good</option>
          <option value="3">3 - Good</option>
          <option value="2">2 - Average</option>
          <option value="1">1 - Poor</option>
        </select>

        <textarea
          name="comments"
          placeholder="Enter your feedback"
          rows="5"
          value={formData.comments}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Feedback
        </button>

      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Feedback;