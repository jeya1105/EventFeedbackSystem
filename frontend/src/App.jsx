import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Feedback from "./pages/Feedback";
import FeedbackList from "./pages/FeedbackList";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Event Feedback</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/feedback-list">Submitted Feedback</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback-list" element={<FeedbackList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;