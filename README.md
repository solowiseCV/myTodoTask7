# Todo App 
This is a simple Todo app built using HTML, CSS, and JavaScript. It allows users to add tasks, edit their content, and delete them. The app employs event listeners and DOM manipulation to achieve these functionalities.

# Vercel Link
  [Click here to view the live link](https://my-list-to-do.vercel.app/)
  
## Features
### Add Task
Users can add a new task by entering the task content in the input field and submitting the form.

### Edit Task
Each task has an "Edit" button. Clicking on the "Edit" button allows users to modify the content of the task. Once editing is complete, users can click "Save" to save changes or revert to "Edit" to cancel the edit.

### Delete Task
Tasks can be deleted by clicking the "Delete" button associated with each task.

## Usage
- Open the HTML file in a web browser.
- Enter a task in the input field.
- Click the "Add" button or press Enter to add the task to the list.
- To edit a task, click the "Edit" button. Save or cancel the edit using the respective buttons.
- To delete a task, click the "Delete" button.
- Implementation Details
- The app is built using vanilla JavaScript and follows an event-driven approach. Key components of the implementation include:

## Event Listeners:
- The app listens for the 'load' event and form submissions to handle task creation, editing, and deletion.

## DOM Manipulation: 
- New tasks are dynamically created and appended to the task list using DOM manipulation.

## Edit Functionality: 
- The app allows users to edit tasks in-place. The "Edit" button toggles between editing and saving modes.

## Delete Functionality:
- Tasks can be deleted individually using the "Delete" button.

## File Structure
 - index.html: HTML file containing the structure of the app.
styles.css: CSS file for styling the app.
script.js: JavaScript file containing the logic for task manipulation.
Compatibility
The app is designed to work on modern web browsers.