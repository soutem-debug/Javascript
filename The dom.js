<div class="container">
  <h1>My todo list</h1>
  
  <form id="todo">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" required>
    <label for="priority">Priority</label>
    <select name="priority" id="priority">
      <option value="low">Low</option>
      <option value="medium" selected>Medium</option>
      <option value="high">High</option>
    </select>
    <button>Add</button>
  </form>

  <!-- This is an empty container for use by javascript. -->
  <ul id="todo-pane"></ul>
  
  <footer>
    <small>
      Flag images used with thanks from <a href="https://www.iconfinder.com/iconsets/prettyoffice8">https://www.iconfinder.com/iconsets/prettyoffice8</a>.
    </small>
  </footer>
</div>


body {
  font-family: sans;
  line-height: 1.5;
}

/* Limit the maximum width regardless of window size */
.container {
  max-width: 60em;
  margin-left: auto;
  margin-right: auto;
}

/* The form */
#todo {
  border: solid thin darkgray;
  padding: 1.5em;
  border-radius: 0.25em;
}

/* The unordered list containing the todos */
#todo-pane {
  padding: 0;
}

/* The todos themselves */
#todo-pane li {
  display: flex;
  max-width: 20em;
  align-items: center;
  background-color: lightyellow;
  border: thin orange solid;
  border-radius: 0.25em;
  padding: 0.5em;
  margin: 1em 0;
}

/* A todo that was just created */
.just-created {
  box-shadow: 0 0 20px 1px orange;
}

/* The image of a flag within a todo */
#todo-pane li img {
  width: 1em;
  padding-right: 1rem;
}

/* The small text in the footer */
small {
  font-size: small;
  font-style: italic;
}


// Modify the code below to set the variables appropriately.

// Get the form by ID from the forms collection.
const form = 
document.getElementById('todo');
// Get the todo pane (the 'ul' element).
const todoPane = 
document.getElementById('todo-pane');
// Get the text input for the title.
const titleInput = 
document.getElementById('title');
// Get the priority select element.
const prioritySelect = 
document.getElementById('priority');
// Get a list of all elements with the 'todo' class.
const allTodos =
document.querySelectorAll('#todo');

console.log('form:', form);
console.log('todoPane:', todoPane);
console.log('titleInput:', titleInput);
console.log('prioritySelect:', prioritySelect);
console.log('allTodos:', allTodos);
