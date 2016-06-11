var app = angular.module('appPortfolio', ['ngRoute', 'ngAnimate']);

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
			title: 'Sam Morrison | Leaf co.'
		})
		.otherwise({
			templateUrl: 'pages/home.html'
		});

	$locationProvider.html5Mode(true);
}]);

app.run(['$rootScope', '$timeout', '$window', function ($rootScope, $timeout, $window) {
	// This is the key to view transition happiness! Mike Robinson
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$timeout(function () {
			$window.scrollTo(0,0);
		}, 600);

		// test for current route
        if(current.$$route) {
            // Set current page title 
            $rootScope.title = current.$$route.title;
        }
	});
}]);