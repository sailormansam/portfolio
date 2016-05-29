app.controller('ProjectCtrl', ['$location', function ($location) {
	this.projects = [
		'impact',
		'leafco',
		'ombuds',
		'spectrum',
		'women-in-engineering'
	];

	this.names = [
		'Impact',
		'Leaf Co.',
		'Ombuds',
		'Spectrum',
		'Women in Engineering'
	];

	this.project = $location.path().substring(1);
	this.location = 'pages' + $location.path() + '.html';

	this.absUrl = $location.absUrl();

	var currentIndex = this.projects.indexOf(this.project);

	// set the previous and next projects to navigate to
	var nextIndex = (currentIndex + 1 >= this.projects.length) ? 0 : currentIndex + 1;
	var prevIndex = (currentIndex - 1 < 0) ? this.projects.length - 1 : currentIndex - 1;

	this.next = this.projects[nextIndex];
	this.prev = this.projects[prevIndex];

	this.nextTitle = this.names[nextIndex];
	this.prevTitle = this.names[prevIndex];
}]);