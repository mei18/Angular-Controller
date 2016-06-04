angular.module('todoApp', [])

.controller('todoController', function() {
	var todo = this;
	todo.list = [
		{text: 'Aprender angular.', done: true},
		{text: 'Hacer la tarea.', done: false}
	];
});