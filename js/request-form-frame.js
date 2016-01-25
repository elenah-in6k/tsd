angular.module('tsd', [])
.directive('requestFormFrame', function() {
	return {
		restrict: 'E',
		scope: {
			name: '='
		},
		templateUrl: '/view/request-form-frame.html';
	};
});