app.controller('ProjectController', ['$location', 'ProjectService', function ($location, ProjectService) {
	this.projects = ProjectService.projects;
	this.absUrl = $location.absUrl();

	// findIndex polyfill
	if (!Array.prototype.findIndex) {
		Array.prototype.findIndex = function(predicate) {
			if (this === null) {
				throw new TypeError('Array.prototype.findIndex called on null or undefined');
			}
			if (typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}
			var list = Object(this);
			var length = list.length >>> 0;
			var thisArg = arguments[1];
			var value;

			for (var i = 0; i < length; i++) {
				value = list[i];
				if (predicate.call(thisArg, value, i, list)) {
					return i;
				}
			}
			return -1;
		};
	}

	this.projectUrl = $location.path().substring(1);

	this.location = 'pages' + $location.path() + '.html';

	var currentIndex = this.projects.findIndex(function(x){ return x.url==this.projectUrl }, this);

	// set the previous and next projects to navigate to
	var nextIndex = (currentIndex + 1 >= this.projects.length) ? 0 : currentIndex + 1;
	var prevIndex = (currentIndex - 1 < 0) ? this.projects.length - 1 : currentIndex - 1;

	this.nextProject = this.projects[nextIndex];
	this.project = this.projects[currentIndex];
	this.prevProject = this.projects[prevIndex];
}]);