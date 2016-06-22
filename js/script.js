var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your to-do list is empty!")
    } else {
      console.log("My Todos", this.todos);
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
    // Adds a new item to the todo list.
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos()
  },
    // Changes a todo in the list
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
    // Deletes a todo from the list/
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
    // Toggles a todo on or off.
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
    // Toggles all todos on. If all todos are completed. Toggle all off.
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything is true, make it false.
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
      this.todos[i].completed = false;
      }
    }
    // Case 2: If everything is false, make it true.
    else {
       for (i = 0; i < totalTodos; i++) {
      this.todos[i].completed = true;
       }
    }
    this.displayTodos();
  }
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll()
  
});