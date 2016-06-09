angular.module('todoApp', [])

.controller('todoController', function() {
	var todoList = this;
	todoList.list = [
		{text: 'Aprender angular.', done: true},
		{text: 'Hacer la tarea.', done: false}
	];

	todoList.add = function(){
		todoList.list.push({text: todoList.todoText, done: false});
		todoList.todoText='';
	};

	todoList.archive = function() {
		var oldTodos = todoList.list;
		todoList.list = [];
		angular.forEach(oldTodos, function(oldTodo) {
			if (!oldTodo.done) {
				todoList.list.push(oldTodo);
			};
		});
	};
});