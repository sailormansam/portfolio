app.controller('ProjectCtrl', ['$location', function ($location) {
	this.project = $location.path().substring(1);
	this.location = 'pages' + $location.path() + '.html';
}]);