# Anirudh-Vijay_ReactJS_Lab
## Solution for ReactJS lab problem

There are many components in it ->

Learning Objectives - ShowList Component -->
The ShowList component manages the display of expense details in an Expense Tracker application. It utilizes React features to fetch, calculate, and present expense data.
Key Features:
Data Handling: Uses useEffect to fetch and manage expense data,Tracks total sum and individual expenditures.
User Interaction: Displays expenses dynamically,Allows users to add new expenses with the ExpenseTracker form.
Callback Functions: Implements callbacks for successful form submission and closing
Layout and Styling: Utilizes CSS for an organized and visually appealing display.
Error Handling: Shows error message if there's an issue fetching data.
Financial Insights: Calculates payable amounts based on individual expenditures.
Usages --> Integrated into the main application, ShowList provides a user-friendly interface for expense visualization, addition, and financial insights.
Learning Objective - ExpenseTracker Component -->
The ExpenseTracker component enables users to add new expenses in an Expense Tracker application. It employs React state, event handling, and server communication for a streamlined form entry experience.
Key Features:
State Management: Uses React state for dynamic handling of user input data (payee name, product, price, date).
Event Handling: Implements event handlers (setPayee, setProduct, setPrice, loggedDate) for real-time state updates.
Form Submission: Defines submitHandler for form submission, creating and sending a data object to the server using pushDataToServer.
Default Date Calculation: Generates a default date during component initialization using setDefaultDate.
Visual Elements: Presents an organized layout with headers, input fields, and clear form instructions.
Usage: Integrated into the main application, ExpenseTracker enhances the user experience by providing a user-friendly form for adding and submitting new expenses.
Learning Objectives - Menu.ts HTTP Requests with Axios
Learn to perform HTTP requests in a React application using the Axios library for fetching and pushing data to a server.
Key Concepts:
Axios Integration:Import and use the Axios library for making HTTP requests in a React application.
GET Request: Implement a function (getDataFromServer) to make a GET request to the server's 'items' endpoint, fetching and returning data.
POST Request:Develop a function (pushDataToServer) to make a POST request, pushing new expense data to the server's 'items' endpoint.
Data Structure:Utilize the IDataList interface for defining the structure of the data exchanged between the client and server.
Headers Configuration: Understand how to configure headers, specifically setting "Content-Type" to "application/json" for POST requests.
Usage: Apply the learned concepts to fetch existing data from a server and push new expense data to facilitate interaction between a React application and a server.
