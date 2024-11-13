 Application for Task Management.

 Introduction

The following is a straightforward task management application which is developed using **React.js**. This application allows users to:

– Make tasks, view them, edit them and delete them.

– Classify tasks into their respective categories like **Upcoming**, **Overdue**, a nd **Completed**.

– Search for tasks and filter them based on the title, priority (High, Medium, Low) of the task and whether the task has been marked as complete or is still pending.

– Populate the task information even after refreshing using the **localStorage**.

The application is smartly designed with an appealing user interface, where there are distinct sections for managing the existing tasks, creating new tasks, and looking up any tasks.

Functionalities

– Screen: Shows the status of different task including those that are going to happen in the near future (**Upcoming**) who are already past due (Overdue) or completed (Completed).

– Embed New Task: The user is provided an opportunity of adding a New Task against Title, Description, Due Date and Priority.

– Search Tasks: A user can perform a search on tasks by the title and search/filter tasks by priority and completion.

– Local Storage: The tasks created are said to be saved in the local storage of the browser, that used local storage so that the data would not be lost after navigating to a new page.

Assumptions.

1. Browser Support: The application is built using simple web technologies that can be used in most modern web browsers (e.g., Chrome, Firefox, Edge, etc.).

2. No Backend: The task information is saved only inside the user’s browser using **localStorage**. There will not be a backend server or database developed in this assignment.

3. Data Storage: The task information does not change or wipe off even if the user closes down the web browser or refreshes the page because the information is kept inside the local storage.

4. No User Authentication: The application does not have any forms of user authentication mecha­nisms available and imp­le­mente­d in their system.
5. Simplistic Task Management: The application permits only the fundamental operations of task management (i.e., create, edit, delete, filter) with little validation (e.g., there are no compulsory fields, and no dates are validated).


Technological Parameters

Frontend: React.js (JavaScript framework)
State Management: React's built-in useState and useEffect hooks.
Persistence: LocalStorage API for saving tasks.
Styling: Basic styles have been created using CSS.
Set up Instructions for Implementation.
Prerequisites
Check that you have installed Node.js and npm on your system. The official website of Node.js is the source to check and download.

Manual for Operating the Application
Retrieve the Repository

To begin with, please take the following code as a reference and clone the repository to your laptop:

bash
Copy code
git clone https://github.com/muddassirsultan/taskmanager.git
cd task-manager-app
Add Packages

Go to the project directory and type npm to add the necessary packages:

bash
Copy code
npm install
Development server sessions

Now that the packages have been installed, you can go ahead to run the development server:

bash
Copy code
npm start
This will run the application and it will open your system’s default browser at http://localhost:3000 with the app.

Access the Application Through the Internet

The application should be running on a local environment. It should be possible to open it in a web browser and start busying with task management.


Assumptions Made

Lack of Time Zone Processing: Dates are written in this format YYYY-MM-DD and thus do not consider time zones or difference in the user’s time zones. This is based on the premise that the same time zone is being worked on by the user.
Task Validation Absence: Very few checks are done. For instance, one can create a task without a due date or even a description. This may be built upon in future versions.
No Backend System: The application is purely client-side with no user management system or data storage across devices.
Elementary Priority Processing: Task have a basic priority functionality (High, Medium, Low ). This in a better version could enhance to accommodate custom priorities or changes in time deadlines.
No Advanced Styling: The application has a simple design with most of the styling done using CSS. In a production setting, a better looking UI framework can be used such as Material UI or Bootstrap.


Forthcoming Enhancements

Task Validation: More validation shall be added to the required fields such as title, and due date.
User Authentication: Allow multiple users to manage their tasks by introducing user authentication.
Task Sorting: An additional feature to sort tasks by due date, priority or creation date.
Backend Integration: Integrate a backend such as Firebase, or Node.js to facilitate task management across devices and users.
Date Validation: Ensure that the due date is not set in the past.
