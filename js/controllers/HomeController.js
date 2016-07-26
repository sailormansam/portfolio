app.controller('HomeController', ['$location', 'ProjectService' , function ($location, ProjectService) {
	this.projects = ProjectService.projects;

	// set height of hero so it doesn't resize if the window viewport changes
	var windowHeight,
		windowWidth;

	var buffer = 0;

	var header = document.getElementsByTagName('header')[0];
	var hero = document.getElementById('hero');

	resize();

	// if width changes re assess height
	window.onresize = function () {
		if(windowWidth != window.innerWidth) {
			resize();
		}
	};

	function resize() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		header.style.height = windowHeight - buffer + 'px';
		hero.style.height = windowHeight - buffer + 'px';
	};
}]);