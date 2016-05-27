app.controller('ProjectCtrl', ['$location', function ($location) {
	this.projects = [
		'impact',
		'leafco',
		'ombuds',
		'spectrum',
		'women-in-engineering'
	];
	this.project = $location.path().substring(1);
	this.location = 'pages' + $location.path() + '.html';

	this.absUrl = $location.absUrl();

	var currentIndex = this.projects.indexOf(this.project);

	// set the previous and next projects to navigate to
	this.next = this.project[(currentIndex + 1 > this.projects.length) ? 0 : currentIndex + 1];
	this.prev = this.project[(currentIndex - 1 < 0) ? this.projects.length : currentIndex - 1];
}]);