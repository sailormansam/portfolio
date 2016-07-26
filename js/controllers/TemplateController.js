app.controller('TemplateController', ['$interval', '$scope', 'ShadowService', function($interval, $scope, ShadowService){
	var lastPosition = -1;
	var self = this;
	this.show = ShadowService.getData();

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
		// if not held by page transition
		$scope.$evalAsync(function(){
			if (top > 0 && !self.show.hold) {
				self.show.shadow = true;
			}
			else {
				self.show.shadow = false;
			}
		});

		scroll(loop);
	}

	// only call if not mobile
	if( window.innerWidth > 560) {
		loop();
	}
	else {
		self.show.shadow = true;
	}
}]);