var todoList = { 
  todos: [],
  addTodo: function(todoText) { // Adds a new todo to the list.
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  changeTodo: function(position, todoText) { // Changes a todo on the list using its array index.
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function(position) { // Deletes a chosen todo from the list using array index.
    this.todos.splice(position, 1);
  },

    
  toggleCompleted: function(position) { // Changes the completion of a chosen todo to true if false. And vice versa.
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function() { // If not all todo's are completed, this function will toggle them all to completed. If they are all completed, the function toggles them all incomplete. 
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
  }
};

var handlers = { // Calls the todolist methods by clicking each method's respective button.
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput')
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = ' ';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
    todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
};


var view = { // Displays any changes in the todo list on-screen.

  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = ''
      todoLi.textContent = todoTextWithCompletion;

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

       todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
      
  
    }
  }
}