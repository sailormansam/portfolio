app.controller('HomeCtrl', function () {
	// set height of hero so it doesn't resize if the window viewport changes
	var windowHeight = window.innerHeight;

	var header = document.getElementsByTagName('header')[0];
	var hero = document.getElementById('hero');

	header.style.height = windowHeight + 'px';
	hero.style.height = windowHeight + 'px';
});