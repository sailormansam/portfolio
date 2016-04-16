var app = angular.module('portfolio', []);

app.config(function($locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('#');;
});