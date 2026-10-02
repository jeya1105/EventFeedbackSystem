function Events() {
  const events = [
    {
      id: 1,
      name: "AI & Machine Learning Workshop",
      date: "10 October 2026",
    },
    {
      id: 2,
      name: "Full Stack Development Workshop",
      date: "15 October 2026",
    },
    {
      id: 3,
      name: "Technology Symposium",
      date: "20 October 2026",
    },
  ];

  return (
    <div className="page">
      <h1>Upcoming Events</h1>

      {events.map((event) => (
        <div className="event-card" key={event.id}>
          <h2>{event.name}</h2>
          <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;