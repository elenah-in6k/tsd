angular.module('tsd', [])
.directive('requestButton', function() {
	restrict: 'E';
  return {
    template: '<span class="request-button-icon "></span>   <span class="request-button-name">Запрос на замену/ремонт оборудования</span>'
  };
});
