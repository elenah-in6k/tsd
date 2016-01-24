angular.module('tsd', [])
.directive('requestButton', function($scope) {
  return {
  	restrict: 'E',
  	scope: {
                btnicon: '=',
                btnname: '='
            },
    template: '<span class="{{btnIcon}} "></span>   <span class="request-button-name">{{btnname}}</span>'
  };
});
