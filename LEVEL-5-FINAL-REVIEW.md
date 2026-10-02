# Level 5 – Final Review & Testing

## Project Title

FullStack Event Feedback Management System

## Objective

The objective of Level 5 is to complete the Event Feedback Management System by improving the user interface, verifying navigation, testing database storage and display, and validating the complete feedback workflow.

## Tasks Completed

### Task 1: Improve Website Styling

Improved the overall appearance of the application using CSS.

The application includes:

- Clean and professional user interface
- Responsive layout
- Styled navigation menu
- Styled buttons and forms
- Feedback cards
- Proper spacing and alignment
- User-friendly page layout

The styling was implemented using the project's `App.css` file.

### Task 2: Verify Navigation

Verified that all navigation links work correctly.

The application contains the following navigation options:

- Home
- Events
- Feedback
- Submitted Feedback

Each navigation link opens the corresponding React page.

## Application Routes

| Page | Route |
|---|---|
| Home | `/` |
| Events | `/events` |
| Feedback | `/feedback` |
| Submitted Feedback | `/feedback-list` |

### Task 3: Verify Feedback Submission

Tested the complete feedback submission process.

The following workflow was verified:

```text
User opens Feedback page
        ↓
Enters feedback details
        ↓
Form validation
        ↓
Submit feedback
        ↓
POST /api/feedback
        ↓
Spring Boot Backend
        ↓
MySQL Database
        ↓
Success message displayed
Task 4: Verify Database Storage
Verified that submitted feedback is stored in the MySQL database.
The feedback information includes:
- Name
- Email
- Event
- Rating
- Comments
The stored data can be retrieved through the backend API.
Task 5: Verify Submitted Feedback Display
Tested the Submitted Feedback page.
The frontend requests the stored feedback using:
GET /api/feedback

The retrieved feedback is displayed on the Submitted Feedback page.
Task 6: End-to-End Testing
Tested the complete application workflow from frontend submission to database storage and retrieval.
Complete workflow:
React Frontend
      ↓
Feedback Form
      ↓
Form Validation
      ↓
Spring Boot REST API
      ↓
MySQL Database
      ↓
Feedback Retrieval API
      ↓
React Submitted Feedback Page

Testing Checklist
Test Case	Status
Homepage loads correctly	Passed
Navigation links work	Passed
Events page displays events	Passed
Feedback form loads correctly	Passed
Required field validation works	Passed
Feedback submission works	Passed
Success message is displayed	Passed
Feedback is stored in MySQL	Passed
Submitted feedback is retrieved	Passed
Submitted feedback is displayed	Passed


Screenshots
The project contains screenshots demonstrating the completed application.
Screenshots include:
- home.png
- events.png
- feedback-form.png
- feedback-success.png
- feedback-list.png
These screenshots are available in the project's screenshots folder.
Demo Video
A project demonstration video is available through the project documentation.
The demo demonstrates:
- Homepage
- Events page
- Feedback form
- Feedback submission
- Success message
- Submitted feedback page
Final Project Structure
EventFeedbackSystem
│
├── backend
│
├── frontend
│
├── screenshots
│   ├── home.png
│   ├── events.png
│   ├── feedback-form.png
│   ├── feedback-success.png
│   └── feedback-list.png
│
├── demo
│
├── LEVEL-1-FRONTEND.md
├── LEVEL-2-BACKEND.md
├── LEVEL-3-DATABASE.md
├── LEVEL-4-INTEGRATION.md
├── LEVEL-5-FINAL-REVIEW.md
└── README.md

Skills Demonstrated
Through the complete project, the following skills were practiced:
- React.js
- JavaScript
- HTML
- CSS
- React Router
- Java Spring Boot
- REST API development
- MySQL
- Spring Data JPA
- Hibernate
- Frontend-backend integration
- Form validation
- Database operations
- Full-stack application development
- Application testing
Level 5 Outcome
The FullStack Event Feedback Management System was completed and tested.
The application provides a complete workflow for collecting event feedback, storing the information in MySQL, retrieving the submitted feedback through REST APIs, and displaying it on the frontend.
The project was reviewed for navigation, validation, API communication, database storage, feedback retrieval, and overall user interface.