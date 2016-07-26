app.factory('ShadowService', function() {
	var data = {
		shadow: false,
		hold: false
	}

	return {
		getData: function() {
			return data;
		}
	}
});