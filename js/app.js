var app = angular.module('portfolio', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
		templateUrl : 'pages/home.html',
		})
		.when('/ombuds', {
		templateUrl : 'pages/ombuds.html',
		})
		.when('/weatrit', {
		templateUrl : 'pages/weatrit.html',
		})
		.when('/crr', {
		templateUrl : 'pages/crr.html',
		})
		.when('/spectrum', {
		templateUrl : 'pages/spectrum.html',
		})
		.when('/leafco', {
		templateUrl : 'pages/leafco.html',
		});

	$locationProvider.html5Mode(true);
});