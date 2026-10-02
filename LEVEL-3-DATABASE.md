# Level 3 – Database Basics

## Project Title

FullStack Event Feedback Management System

## Objective

The objective of Level 3 is to introduce database storage into the Event Feedback Management System.

The submitted feedback is stored in a MySQL database and can be retrieved through the Spring Boot backend.

## Technologies Used

- MySQL
- Spring Data JPA
- Hibernate
- Spring Boot
- Java

## Tasks Completed

### Task 1: Database Setup

Created a MySQL database named:

```text
event_feedback
The database is connected to the Spring Boot backend using the MySQL JDBC driver.
Database connection:
MySQL
Database: event_feedback

Task 2: Feedback Table
Created a feedback entity to represent feedback information stored in the database.
The feedback data contains:
- ID
- Name
- Email
- Event
- Rating
- Comments
The Feedback entity is mapped to the database using JPA annotations.
Task 3: Save Feedback Data
Integrated Spring Data JPA with the backend to save submitted feedback into the MySQL database.
The workflow is:
Feedback Form
      ↓
Spring Boot REST API
      ↓
Feedback Entity
      ↓
Spring Data JPA
      ↓
MySQL Database

When a user submits the feedback form, the backend receives the data and stores it in the database.
Task 4: Retrieve and Display Feedback
Implemented database retrieval through the Spring Boot backend.
The stored feedback can be retrieved using the feedback API:
GET /api/feedback

The retrieved feedback is sent to the frontend and displayed on the Submitted Feedback page.
Database Configuration
The Spring Boot application uses the following database configuration:
spring.datasource.url=jdbc:mysql://localhost:3306/event_feedback
spring.datasource.username=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

Hibernate is configured to automatically update the database structure when required:
spring.jpa.hibernate.ddl-auto=update

Backend Database Components
The database integration contains:
backend
└── src
    └── main
        └── java
            └── com
                └── jeya
                    └── eventfeedback
                        ├── Feedback.java
                        └── FeedbackRepository.java

Feedback Entity
Feedback.java represents the feedback data model and maps the Java object to the database table.
Feedback Repository
FeedbackRepository.java uses Spring Data JPA to provide database operations for storing and retrieving feedback.
Database Workflow
User submits feedback
        ↓
React Frontend
        ↓
POST /api/feedback
        ↓
Spring Boot Backend
        ↓
FeedbackRepository
        ↓
MySQL Database
        ↓
Stored Feedback
        ↓
GET /api/feedback
        ↓
React Submitted Feedback Page

Skills Gained
Through Level 3, the following skills were practiced:
- MySQL database setup
- Database connectivity
- JPA entity mapping
- Spring Data JPA
- Hibernate
- Data persistence
- CRUD fundamentals
- Backend-database integration
Level 3 Outcome
The Event Feedback Management System was successfully integrated with a MySQL database.
Submitted feedback is stored persistently and can be retrieved through the backend API for display on the frontend.