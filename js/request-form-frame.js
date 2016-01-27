angular.module('form', [])
.directive('requestFormFrame', function() {
	return {
		restrict: 'E',
		scope: {
			name1: '='
		},
		templateUrl: 'view/request-form-frame.html'
	};
});