# Level 4 – Frontend & Backend Connection

## Project Title

FullStack Event Feedback Management System

## Objective

The objective of Level 4 is to integrate the React frontend with the Spring Boot backend and create a complete feedback data flow.

The feedback form sends data to the backend API, the backend stores the data in the database, and the submitted feedback can be retrieved and displayed on the frontend.

## Technologies Used

- React.js
- JavaScript
- Spring Boot
- REST API
- MySQL
- Spring Data JPA

## Tasks Completed

### Task 1: Connect Feedback Form to Backend API

Connected the React feedback form to the Spring Boot REST API.

When the user submits the feedback form, the frontend sends the feedback data to:

```text
POST /api/feedback
The frontend communicates with the backend using the fetch() API.
The data flow is:
React Feedback Form
        ↓
POST /api/feedback
        ↓
Spring Boot Backend
        ↓
Spring Data JPA
        ↓
MySQL Database

Task 2: Display Success Message
Implemented a success message after the feedback is successfully submitted.
After a successful API response, the user receives a confirmation message indicating that the feedback has been submitted successfully.
The feedback form is also reset after successful submission.
Task 3: Fetch and Display Feedback
Connected the Submitted Feedback page with the backend API.
The frontend retrieves feedback using:
GET /api/feedback

The retrieved feedback is displayed in the frontend as a list.
The workflow is:
MySQL Database
        ↓
Spring Boot Backend
        ↓
GET /api/feedback
        ↓
React Frontend
        ↓
Submitted Feedback Page

Task 4: Basic Validation
Implemented basic form validation to ensure that required information is entered before submission.
The feedback form validates fields such as:
- Name
- Email
- Event
- Rating
- Comments
The email field uses email-type validation, and required fields prevent incomplete submissions.
Frontend API Integration
The feedback form sends the submitted information to the backend in JSON format.
Example data:
{
  "name": "R Jeya",
  "email": "example@gmail.com",
  "event": "AI Workshop",
  "rating": 4,
  "comments": "Very informative and useful workshop."
}

The rating value is converted to a number before being sent to the backend.
Complete Data Flow
User
 ↓
React Feedback Form
 ↓
Form Validation
 ↓
POST /api/feedback
 ↓
Spring Boot REST Controller
 ↓
Feedback Repository
 ↓
MySQL Database
 ↓
Success Response
 ↓
Success Message

For viewing submitted feedback:
React Submitted Feedback Page
 ↓
GET /api/feedback
 ↓
Spring Boot REST API
 ↓
MySQL Database
 ↓
Feedback Data
 ↓
React Feedback List

Skills Gained
Through Level 4, the following skills were practiced:
- Frontend-backend integration
- REST API communication
- HTTP POST requests
- HTTP GET requests
- JSON data handling
- Form validation
- Success and error handling
- Database data retrieval
- Full-stack data flow
Level 4 Outcome
The React frontend and Spring Boot backend were successfully integrated.
Users can submit event feedback through the frontend, the feedback is stored in the MySQL database, and the submitted feedback can be retrieved and displayed on the frontend.