Live Project at https://taskmanagerelitefitai.netlify.app/

1. How long did you spend on the coding test?

Ans.For this task I approximately took 3 hours. This includes:

- Setting up the React app and initial components.
- Implementing the core task management features (create, edit, delete tasks).
- Adding filtering, searching, and displaying tasks in categories.
- Storing data in localStorage.
- Styling the app with basic CSS.
- Testing and debugging.
- Deploying
  
2. What was the most useful feature that was added to the latest version of your chosen language?
Ans.The most useful feature that was added to the latest version of React Js was concurrency.Concurrency is not a feature.
It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time. You can think of concurrency as an implementation detail — it’s valuable because of the features that it unlocks.
React uses sophisticated techniques in its internal implementation, like priority queues and multiple buffering. But you won’t see those concepts anywhere in our public APIs.

3. How would you track down a performance issue in production? Have you ever had to do this?

Ans.To track down performance issues in production, I would follow a systematic approach:

1. Analyze the Symptoms: First, identify what the performance issue looks like. Is the app slow to load? Is it slow when interacting with the UI? Or are there delays when fetching or processing data?

2. Use Browser Developer Tools: Utilize the browser’s built-in Developer Tools to inspect the **Performance* tab. This can show how long each part of the page load and rendering process takes. You can check:
   - JavaScript execution times
   - Rendering times
   - Network requests (for slow API calls, etc.)
Yes, I’ve had to track performance issues in production. In a previous project, the app was slow to load, especially on mobile devices.  I identified that a large number of unused JavaScript files were being loaded, which increased the page load time.

4.If you had more time, what additional features or improvements would you consider adding to the task management application?

Ans.If I had more time, I would consider the following additional features and improvements:

1. User Authentication:
   - Implement user authentication using OAuth or JWT to allow multiple users to securely manage their own task lists.
   
2. Backend Integration:
   - Set up a backend (using Node.js and MongoDB or Firebase) to store tasks remotely, making the app accessible from multiple devices.

3. Push Notifications:
   - Add notifications to remind users about *upcoming* or *overdue* tasks.

4. Task Priority Customization:
   - Allow users to create custom priority levels instead of using only predefined ones (e.g., High, Medium, Low).

5. Task Sorting:
   - Implement task sorting by due date, priority, or creation date, so users can easily manage and view tasks in different orders.

6. Task Categories:
   - Allow users to categorize tasks into different categories (e.g., Personal, Work, Urgent) for better task organization.

7. Search Enhancements:
   - Improve the search functionality by allowing search by multiple fields, such as description, priority, and date range.

