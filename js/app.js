var app = angular.module('portfolio', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {
	$compileProvider.debugInfoEnabled(false);

	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'HomeCtrl',
			controllerAs: 'h'
		})
		.when('/ombuds', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectCtrl',
			controllerAs: 'p'
		})
		.when('/women-in-engineering', {
			templateUrl : 'pages/project.html',
			controller: 'ProjectCtrl',
			controllerAs: 'p'
		})
		.when('/impact', {
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
			templateUrl: 'pages/home.html'
		});

	$locationProvider.html5Mode(true);
}]);

// This is the key to view transition happiness! Mike Robinson
app.run(function ($rootScope, $timeout, $window) {
  $rootScope.$on('$routeChangeSuccess', function () {
    $timeout(function () {
      $window.scrollTo(0,0);
    }, 400);
  });
});