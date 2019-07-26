var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list2.html',
			controller:'empController'
		})
		.when('/employees', {
			templateUrl:'templates/list2.html',
			controller:'empController'
		})
		.when('/employees2', {
			templateUrl:'templates/list2.html',
			controller:'empController'
		})
		.when('/employees3', {
			templateUrl:'templates/list3.html',
			controller:'empController'
		})
		.when('/employees/create', {
			templateUrl:'templates/add.html',
			controller:'empController'
		})
		.when('/employees/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'empController'
		})
		.when('/employees/:id/show', {
			templateUrl:'templates/show.html',
			controller:'empController'
		});
});
