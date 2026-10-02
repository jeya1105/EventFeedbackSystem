# FullStack Event Feedback Management System

## 📌 Introduction

The **FullStack Event Feedback Management System** is a web-based application developed to collect, manage, store, and display feedback submitted by users for different events.

The main purpose of this project is to provide a simple and user-friendly platform where users can view available events, submit their feedback, and view previously submitted feedback.

This project is developed using a modern full-stack architecture with:

- **Frontend:** React.js with Vite
- **Backend:** Java Spring Boot
- **Database:** MySQL
- **API Communication:** REST APIs
- **Development Tools:** VS Code, MySQL Workbench, Maven Wrapper

The project demonstrates the complete flow of a full-stack application, starting from the user interface and continuing through backend API processing and database storage.

---

# 🎯 Project Objectives

The main objectives of the Event Feedback Management System are:

1. To create a user-friendly homepage for the application.
2. To provide an Events page to display available events.
3. To provide a feedback form for users.
4. To develop a backend server using Spring Boot.
5. To create REST APIs for handling feedback.
6. To store feedback information in a MySQL database.
7. To retrieve submitted feedback from the database.
8. To connect the React frontend with the Spring Boot backend.
9. To implement basic form validation.
10. To display success and error messages to users.
11. To test the complete feedback submission and retrieval workflow.
12. To provide a professional and responsive user interface.

---

# 🛠️ Technologies Used

## Frontend

- React.js
- Vite
- JavaScript
- HTML
- CSS
- React Router DOM

## Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Validation

## Database

- MySQL
- MySQL Workbench

## Tools

- Visual Studio Code
- Maven Wrapper
- Git
- GitHub
- Browser Developer Tools

---

# 🏗️ Project Architecture

The application follows a simple full-stack architecture.

```text
                    EVENT FEEDBACK MANAGEMENT SYSTEM
                                |
              +-----------------+-----------------+
              |                                   |
        React Frontend                     Spring Boot Backend
              |                                   |
              |          REST API                 |
              +--------------->-------------------+
                                                  |
                                             Spring Data JPA
                                                  |
                                                  |
                                             MySQL Database

The frontend collects user input and sends the feedback data to the backend using REST API requests.
The Spring Boot backend processes the request and stores the information in the MySQL database.
When the user wants to view submitted feedback, the frontend requests the data from the backend and displays the retrieved records.
📁 Project Structure
EventFeedbackSystem
│
├── backend
│   │
│   ├── .mvn
│   ├── src
│   │   └── main
│   │       ├── java
│   │       │   └── com
│   │       │       └── jeya
│   │       │           └── eventfeedback
│   │       │               ├── controller
│   │       │               │   ├── WelcomeController.java
│   │       │               │   └── FeedbackController.java
│   │       │               │
│   │       │               ├── model
│   │       │               │   └── Feedback.java
│   │       │               │
│   │       │               ├── repository
│   │       │               │   └── FeedbackRepository.java
│   │       │               │
│   │       │               └── EventFeedbackBackendApplication.java
│   │       │
│   │       └── resources
│   │           └── application.properties
│   │
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
│
├── frontend
│   │
│   ├── public
│   ├── src
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Feedback.jsx
│   │   │   └── FeedbackList.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
└── README.md

🌐 Frontend Development
The frontend of the application is developed using React.js and Vite.
React Router DOM is used to navigate between different pages without reloading the complete application.
The frontend contains the following pages:
1. Home Page
The Home page acts as the main landing page of the application.
It provides:
- Application title
- Navigation bar
- Introduction to the system
- Navigation options to Events and Feedback pages
- Professional user interface
2. Events Page
The Events page displays sample events available in the system.
Example events include:
- Tech Conference 2026
- AI Workshop
- Cultural Fest
The page presents the event information using a card-based layout.
3. Feedback Page
The Feedback page provides a form where users can submit their feedback.
The form contains:
- Name
- Email
- Event
- Rating
- Comments
The user can select an event and rating and provide comments before submitting the feedback.
4. Submitted Feedback Page
The Submitted Feedback page retrieves feedback submitted by users through the backend API.
The retrieved feedback is displayed in a structured card-based layout.
Each feedback record contains information such as:
- Name
- Email
- Event
- Rating
- Comments
🔗 Frontend Routing
The application uses React Router for page navigation.
The routes are:
/                    → Home Page
/events              → Events Page
/feedback            → Feedback Page
/feedback-list       → Submitted Feedback Page

The navigation bar allows users to move between these pages easily.
⚙️ Backend Development
The backend is developed using Java Spring Boot.
The backend provides REST APIs that handle communication between the React frontend and MySQL database.
The backend is responsible for:
- Receiving feedback
- Processing feedback data
- Validating requests
- Saving feedback
- Retrieving feedback
- Sending feedback data to the frontend
🔌 REST API Endpoints
Welcome API
GET /api/welcome

This endpoint is used to verify that the backend server is running successfully.
Submit Feedback API
POST /api/feedback

This endpoint receives feedback information from the React frontend.
Example request:
{
  "name": "Jeya",
  "email": "jeya@example.com",
  "event": "AI Workshop",
  "rating": 4,
  "comments": "The workshop was very informative."
}

The backend processes this information and stores it in the MySQL database.
Get Feedback API
GET /api/feedback

This endpoint retrieves all submitted feedback records from the database.
The React frontend uses this API to display the submitted feedback.
🗄️ Database
MySQL is used as the database for this project.
A database named:
event_feedback

is used to store feedback information.
The backend uses Spring Data JPA to communicate with MySQL.
The feedback data is automatically stored and retrieved through the backend.
📊 Feedback Data
The feedback table contains information such as:
Field	Description
ID	Unique feedback ID
Name	Name of the user
Email	Email address
Event	Selected event
Rating	Event rating
Comments	User feedback


🧩 Backend Components
The backend follows a simple layered structure.
Controller
The controller handles HTTP requests from the frontend.
Example:
FeedbackController.java

It provides APIs for:
- Submitting feedback
- Retrieving feedback
Model
The model represents the feedback data structure.
Example:
Feedback.java

It contains fields corresponding to the feedback information.
Repository
The repository provides database interaction using Spring Data JPA.
Example:
FeedbackRepository.java

It is responsible for communicating with the database.
🚀 Level 1 – Frontend Pages
The first level focuses on creating the frontend pages.
Completed Features
- Homepage
- Navigation bar
- Events page
- Feedback page
- Feedback form
- Event selection
- Rating selection
- Comments section
The navigation links allow users to move between the required pages.
🚀 Level 2 – Backend Server
The second level focuses on creating the backend server.
Completed Features
- Spring Boot backend
- Backend server running on port 8080
- Welcome API
- Feedback POST API
- Feedback GET API
- REST API communication
The backend receives feedback submitted from the frontend and provides feedback data to the frontend.
🚀 Level 3 – Database Integration
The third level focuses on database integration.
Completed Features
- MySQL database setup
- event_feedback database
- Feedback entity
- Spring Data JPA integration
- Feedback repository
- Feedback storage
- Feedback retrieval
The submitted feedback is stored permanently in the MySQL database.
🚀 Level 4 – Frontend and Backend Integration
The fourth level connects the React frontend with the Spring Boot backend.
Completed Features
- React fetch API
- POST feedback request
- GET feedback request
- Backend communication
- Success message
- Error message
- Form validation
- Database integration
When a user submits the feedback form, the React application sends the data to the Spring Boot API.
The backend then stores the data in MySQL.
✅ Form Validation
Basic form validation has been implemented.
The feedback form validates required fields including:
- Name
- Email
- Event
- Rating
- Comments
The email field also uses email-format validation.
Users cannot submit the form without completing the required fields.
🚀 Level 5 – Styling and Testing
The fifth level focuses on improving the user interface and testing the complete workflow.
Completed Features
- Professional navigation bar
- Responsive layout
- Event cards
- Feedback form styling
- Submitted feedback cards
- Buttons and hover effects
- Success messages
- Error messages
- Responsive design
- Navigation testing
- Feedback submission testing
- Database storage testing
- Feedback retrieval testing
🎨 User Interface
The application has been designed with a clean and professional interface.
The styling includes:
- Modern navigation bar
- Card-based event layout
- Clean feedback form
- Responsive design
- Consistent spacing
- Buttons with hover effects
- Clear success and error messages
The application is designed to provide a simple user experience for submitting and viewing feedback.
🔄 Complete Application Workflow
The complete workflow of the application is:
User Opens Website
        ↓
Home Page
        ↓
Events Page
        ↓
User Selects Event
        ↓
Feedback Page
        ↓
User Enters Feedback
        ↓
Form Validation
        ↓
React Frontend
        ↓
POST /api/feedback
        ↓
Spring Boot Backend
        ↓
Spring Data JPA
        ↓
MySQL Database
        ↓
Feedback Stored
        ↓
Success Message
        ↓
Submitted Feedback Page
        ↓
GET /api/feedback
        ↓
Spring Boot Backend
        ↓
MySQL Database
        ↓
Feedback Retrieved
        ↓
Feedback Displayed in React

🧪 Testing
The application was tested for the major functionality required in the project.
Frontend Testing
The following pages were tested:
- Home
- Events
- Feedback
- Submitted Feedback
Navigation between pages was verified.
Form Testing
The feedback form was tested with:
- Valid name
- Valid email
- Event selection
- Rating selection
- Comments
Required-field validation was also tested.
Backend Testing
The backend server was tested successfully.
The backend runs on:
http://localhost:8080

The API endpoints were tested for:
- Welcome response
- Feedback submission
- Feedback retrieval
Database Testing
The MySQL database was tested to verify that submitted feedback is stored successfully.
The stored feedback was retrieved through the backend API and displayed in the frontend.
💻 How to Run the Project
Step 1 – Start MySQL
Make sure MySQL Server is running.
The project uses the database:
event_feedback

Step 2 – Start Backend
Open a terminal and navigate to the backend folder.
cd C:\Users\rjeya\OneDrive\Desktop\EventFeedbackSystem\backend

Run:
.\mvnw.cmd spring-boot:run

The backend will start on:
http://localhost:8080

Step 3 – Start Frontend
Open another terminal.
Navigate to the frontend folder:
cd C:\Users\rjeya\OneDrive\Desktop\EventFeedbackSystem\frontend

Run:
npm run dev

The frontend will start on:
http://localhost:5174

🔐 Database Configuration
The backend uses MySQL configuration in:
backend/src/main/resources/application.properties

Example configuration:
spring.application.name=event-feedback-backend

spring.datasource.url=jdbc:mysql://localhost:3306/event_feedback
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

server.port=8080

Replace:
MY_MYSQL_PASSWORD

with the local MySQL password.
The actual password should not be shared publicly or uploaded to GitHub.
📡 Application URLs
Frontend
http://localhost:5174

Backend
http://localhost:8080

Welcome API
http://localhost:8080/api/welcome

Feedback API
http://localhost:8080/api/feedback

📌 Key Features
The Event Feedback Management System provides the following major features:
- User-friendly homepage
- Events listing
- Feedback submission
- Event selection
- Rating selection
- Comment submission
- Form validation
- REST API communication
- Spring Boot backend
- MySQL database integration
- Feedback storage
- Feedback retrieval
- Submitted feedback display
- Success and error messages
- Responsive user interface
- React routing
📈 Future Enhancements
The application can be further improved by adding:
- User authentication and login
- Admin dashboard
- Event creation and management
- Edit and delete feedback
- Search feedback
- Filter feedback by event
- Sort feedback by rating
- Pagination
- Feedback analytics
- Rating charts
- Export feedback as CSV or PDF
- Email notifications
- Deployment using cloud platforms
- Role-based access control
🎓 Skills Demonstrated
This project demonstrates practical knowledge of:
- React.js
- JavaScript
- React Router
- HTML
- CSS
- Java
- Spring Boot
- Spring Web
- REST APIs
- Spring Data JPA
- MySQL
- Database Integration
- CRUD Concepts
- Form Validation
- API Integration
- Frontend-Backend Communication
- Debugging
- Application Testing
- Responsive Web Design
📋 Project Status
The core Event Feedback Management System has been completed according to the required project levels.
Level 1
Frontend Pages                 ✅ Completed
Navigation                     ✅ Completed
Events Page                    ✅ Completed
Feedback Page                  ✅ Completed

Level 2
Spring Boot Backend            ✅ Completed
Welcome API                    ✅ Completed
Feedback POST API              ✅ Completed
Feedback GET API               ✅ Completed

Level 3
MySQL Database                 ✅ Completed
Feedback Table                 ✅ Completed
Data Storage                   ✅ Completed
Data Retrieval                 ✅ Completed

Level 4
Frontend-Backend Integration   ✅ Completed
Form Validation                ✅ Completed
Success Message                ✅ Completed
API Integration                ✅ Completed

Level 5
Professional Styling           ✅ Completed
Navigation Testing             ✅ Completed
Storage Testing                ✅ Completed
Feedback Display Testing       ✅ Completed
End-to-End Testing             ✅ Completed

👨‍💻 Developer
Jeya R
M.Tech Computer Science Engineering
Project: FullStack Event Feedback Management System
📚 Learning Outcomes
Through this project, I gained practical experience in developing a complete full-stack web application.
The major learning outcomes include:
- Understanding React component development
- Creating frontend pages using React
- Implementing client-side routing
- Creating forms and handling user input
- Implementing form validation
- Developing REST APIs using Spring Boot
- Connecting Spring Boot with MySQL
- Using Spring Data JPA
- Performing frontend-backend API communication
- Storing and retrieving data from a relational database
- Debugging frontend and backend issues
- Testing an end-to-end application workflow
- Designing a responsive and professional user interface
📜 Conclusion
The FullStack Event Feedback Management System successfully demonstrates the development of a complete full-stack web application using React.js, Spring Boot, and MySQL.
The project covers the complete workflow from creating a user-friendly frontend and collecting feedback to processing the feedback through REST APIs, storing it in a MySQL database, retrieving the stored information, and displaying it back to users.
This project provides practical experience in frontend development, backend API development, database integration, REST communication, validation, debugging, and end-to-end application testing.