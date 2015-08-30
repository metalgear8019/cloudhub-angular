var app = angular.module('TaskManagementApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/tasks', {
			'templateUrl': 'task/masterlist.html'
		})
		.when('/tasks/today', {
			'templateUrl': 'taskstoday/todays_task.html'
		})
		.when('/tasks/today/:id', {
			'templateUrl': 'taskstoday/update_task.html'
		})
		.when('/tasks/add', {
			'templateUrl': 'task/create_task.html'
		})
		.when('/tasks/:id', {
			'templateUrl': 'task/edit_task.html'
		})
		.when('/tasks/settings', {
			'templateUrl': 'taskstoday/todays_task.html'
		});

	// the only invalid route -> because no one's perfect :)
	$routeProvider
		.otherwise({
			'redirectTo': '/tasks'
		});
}]);