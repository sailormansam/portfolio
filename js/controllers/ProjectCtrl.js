app.controller('ProjectCtrl', function ($location) {
	this.showModal = false;

	this.hideModal = function () {
		this.showModal = false;
	}

	this.openProject = function (title) {
		$location.hash(title);
		this.showModal = true;
	}
});