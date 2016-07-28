var app = angular.module('appPortfolio', ['ngRoute', 'ngAnimate', 'ngTouch']);

app.config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {
	$compileProvider.debugInfoEnabled(false);

	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'HomeController',
			controllerAs: 'h',
			title: 'Sam Morrison'
		})
		.when('/ombuds', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectController',
			controllerAs: 'p',
			title: 'Sam Morrison | Ombuds'
		})
		.when('/women-in-engineering', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectController',
			controllerAs: 'p',
			title: 'Sam Morrison | Women In Engineering'
		})
		.when('/impact', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectController',
			controllerAs: 'p',
			title: 'Sam Morrison | Impact'
		})
		.when('/spectrum', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectController',
			controllerAs: 'p',
			title: 'Sam Morrison | Spectrum'
		})
		.when('/leafco', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectController',
			controllerAs: 'p',
			title: 'Sam Morrison | Leaf Co.'
		})
		.when('/after-hours', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectController',
			controllerAs: 'p',
			title: 'Sam Morrison | After Hours'
		})
		.otherwise({
			templateUrl: 'pages/home.html'
		});

	$locationProvider.html5Mode(true);
}]);

app.run(['$rootScope', '$timeout', '$window', 'ShadowService', function ($rootScope, $timeout, $window, ShadowService) {
	// Wait for view content to load
	$rootScope.$on('$viewContentLoaded', function (event, current, previous) {
		$timeout(function () {
			$window.scrollTo(0,0);
			ShadowService.getData().hold = false;
		}, 700);
	});

	// This is the key to view transition happiness! Mike Robinson
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		// hide header shadow
		var show = ShadowService.getData();
		show.shadow = false;
		show.hold = true;

		// test for current route
		if(current.$$route) {
			// Set current page title 
			$rootScope.title = current.$$route.title;
		}
	});
}]);