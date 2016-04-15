app.controller('ProjectCtrl', function ($location) {
	this.showModal = false;
	this.template;

	this.hideModal = function () {
		this.showModal = false;
	}

	this.openProject = function (title) {
		$location.hash(title);
		this.showModal = true;
		this.template = 'pages/' + title + '.html';
	}
});