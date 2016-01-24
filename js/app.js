angular.module('tsd', [])
.directive('requestButton', function() {
	return {
		restrict: 'E',
		scope: {
			name: '='
		},
		template: '<span class=""></span><span class="request-button-name">{{name}}</span>'
	};
});