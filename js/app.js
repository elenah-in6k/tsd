angular.module('tsd', [])
.directive('requestButton', function() {
	return {
		restrict: 'E',
		scope: {
			name: '=',
			icon: '='
		},
		template: '<div class="btn request-button"> <span class="request-button-icon">{{icon}}</span><span class="request-button-name">{{name}}</span> </div>'
	};
});