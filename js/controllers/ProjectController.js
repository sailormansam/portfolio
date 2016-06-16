app.controller('ProjectController', ['$location', function ($location) {
	this.projects = [
		{
			url: 'impact',
			title: 'Impact',
			color: '#000000'
		},
		{
			url: 'leafco',
			title: 'Leaf Co.',
			color: '#a4b531'
		},
		{
			url: 'ombuds',
			title: 'Ombuds',
			color: '#90E4DF'
		},
		{
			url: 'spectrum',
			title: 'Spectrum',
			color: '#20687f'
		},
		{
			url: 'women-in-engineering',
			title: 'Women in Engineering',
			color: '#E5592E'
		}
	];

	this.project = $location.path().substring(1);
	this.location = 'pages' + $location.path() + '.html';

	this.absUrl = $location.absUrl();

	var currentIndex = this.projects.findIndex(function(x){ return x.url==this.project }, this);

	// set the previous and next projects to navigate to
	var nextIndex = (currentIndex + 1 >= this.projects.length) ? 0 : currentIndex + 1;
	var prevIndex = (currentIndex - 1 < 0) ? this.projects.length - 1 : currentIndex - 1;

	this.next = this.projects[nextIndex];
	this.prev = this.projects[prevIndex];
}]);