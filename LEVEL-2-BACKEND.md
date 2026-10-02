# Level 2 – Backend Setup

## Project Title

FullStack Event Feedback Management System

## Objective

The objective of Level 2 is to set up a backend server that handles requests from the frontend and provides REST API endpoints for the Event Feedback Management System.

The backend is responsible for receiving feedback data and providing feedback information to the frontend.

## Technologies Used

- Java
- Spring Boot
- Spring Web
- REST API
- Maven

## Tasks Completed

### Task 1: Backend Server Setup

Created a backend server using Spring Boot.

The backend application runs on:

```text
http://localhost:8080
The Spring Boot application is organized into controllers, models, and repository components.
Task 2: Welcome Route
Created a backend welcome route to verify that the backend server is running correctly.
The backend provides a welcome response through the REST API.
Example endpoint:
GET /welcome

This endpoint is used to confirm that the Spring Boot backend is active and accessible.
Task 3: Feedback API Route
Created a REST API endpoint to receive feedback submitted from the frontend.
Example endpoint:
POST /api/feedback

The endpoint receives feedback information such as:
- Name
- Email
- Event
- Rating
- Comments
The received feedback is processed by the backend before being stored in the database.
Task 4: Display Submitted Feedback
Created an API endpoint to retrieve submitted feedback.
Example endpoint:
GET /api/feedback

The frontend uses this API to retrieve the submitted feedback and display it on the Submitted Feedback page.
Backend Structure
The backend follows a basic Spring Boot structure:
backend
└── src
    └── main
        └── java
            └── com
                └── jeya
                    └── eventfeedback
                        ├── EventFeedbackBackendApplication.java
                        ├── WelcomeController.java
                        ├── FeedbackController.java
                        ├── Feedback.java
                        └── FeedbackRepository.java

API Endpoints
Method	Endpoint	Purpose
GET	/welcome	Verify backend server
POST	/api/feedback	Submit feedback
GET	/api/feedback	Retrieve submitted feedback


Backend Workflow
The backend follows this basic workflow:
Frontend
   ↓
REST API Request
   ↓
Spring Boot Backend
   ↓
Feedback Processing
   ↓
Database
   ↓
Feedback Response
   ↓
Frontend

Skills Gained
Through Level 2, the following skills were practiced:
- Spring Boot application setup
- REST API development
- Backend routing
- HTTP GET and POST requests
- Request handling
- Controller development
- Backend and frontend communication
Level 2 Outcome
The Spring Boot backend was successfully created and configured to handle feedback-related requests. REST API endpoints were implemented for receiving and retrieving feedback, providing the foundation for database integration and frontend-backend communication.