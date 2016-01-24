angular.module('tsd', [])
.directive('requestButton', function($scope) {
	$scope.btnIcon = "=";
	$scope.btname = "=";
	
  return {
  	restrict: 'E',
    template: '<span class="{{btnIcon}} "></span>   <span class="request-button-name">{{btnname}</span>'
  };
});
