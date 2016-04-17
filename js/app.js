var app = angular.module('portfolio', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'h'
		})
		.when('/ombuds', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectCtrl',
			controllerAs: 'p'
		})
		.when('/weatrit', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectCtrl',
			controllerAs: 'p'
		})
		.when('/crr', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectCtrl',
			controllerAs: 'p'
		})
		.when('/spectrum', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectCtrl',
			controllerAs: 'p'
		})
		.when('/leafco', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectCtrl',
			controllerAs: 'p'
		})
		.otherwise({
			templateUrl: 'pages/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'h'
		});

	$locationProvider.html5Mode(true);
}]);