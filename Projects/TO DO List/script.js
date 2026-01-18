document.addEventListener('DOMContentLoaded',()=>
 {
 // Get references to the HTML elements
 const taskInput = document.getElementById('taskInput');
 const addTaskBtn = document.getElementById('addTaskBtn');
 const taskList = document.getElementById('taskList');
 // Function to add a new task
 function addTask() 
 {
  const taskText = taskInput.value.trim();
  // If the input is empty, show an alert
  if (taskText === '') 
  {
   alert('Plz enter a task');
   return;
  }  
 // Create the new list item (li)
 const li = document.createElement('li');
 // Create a span to hold the task text
 const taskSpan = document.createElement('span');
 taskSpan.textContent = taskText;
 li.appendChild(taskSpan);
 // Create a container for the buttons
 const buttonContainer = document.createElement('div');
 buttonContainer.classList.add('task-buttons');
 // Create the "Done" button
 const doneBtn = document.createElement('button');
 doneBtn.textContent = 'Done';
 doneBtn.classList.add('done-btn');
 doneBtn.addEventListener('click', () => 
 {
  li.classList.toggle('completed');
 });
 // Create the "Delete" button
 const deleteBtn = document.createElement('button');
 deleteBtn.textContent = 'Delete';
 deleteBtn.classList.add('delete-btn');
 deleteBtn.addEventListener('click',() => {
  taskList.removeChild(li);
  });
 // Add buttons to their container
 buttonContainer.appendChild(doneBtn);
 buttonContainer.appendChild(deleteBtn);
 // Add the button container to the list item
 li.appendChild(buttonContainer);
 // Add the new task to the list
 taskList.appendChild(li);
 // Clear the input box after adding the task
 taskInput.value = '';
 }
 // Event listener for the "Add Task" button click
 addTaskBtn.addEventListener('click', addTask);
 // Event listener for the "Enter" key press in the input field
 taskInput.addEventListener('keypress', (event) => {
 if (event.key === 'Enter') {
  addTask();
 }
 });
});