app.controller('TemplateController', ['$interval', '$scope', function($interval, $scope){
	var self = this;
	this.showShadow = false;
	var lastPosition = -1;

	// Detect request animation frame for scroll event
	// https://gist.github.com/Warry/4254579
	var scroll = window.requestAnimationFrame ||
				 window.webkitRequestAnimationFrame ||
				 window.mozRequestAnimationFrame ||
				 window.msRequestAnimationFrame ||
				 window.oRequestAnimationFrame ||
				 // IE Fallback, you can even fallback to onscroll
				 function(callback){ window.setTimeout(callback, 1000/60) };

	function loop(){
		 // Avoid calculations if not needed
		var top = window.pageYOffset;

		if (lastPosition == top) {
			scroll(loop);
			return false;
		} else {
			lastPosition = top;
		}

		// make sure angular scope gets updated
		$scope.$evalAsync(function(){
			if (top > 0) {
				self.showShadow = true;	
			}
			else {
				self.showShadow = false;
			}
		});

		scroll(loop);
	}

	loop();
}]);