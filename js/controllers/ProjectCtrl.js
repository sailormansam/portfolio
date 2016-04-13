app.controller('ProjectCtrl', function ($scope, $http, $location) {
	this.openProject = function (title) {
		$location.hash(title);
	}
});