app.controller('ProjectCtrl', ['$location', function ($location) {
	this.location = 'pages' + $location.path() + '.html';
}]);