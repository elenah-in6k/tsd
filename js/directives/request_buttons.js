angular.module('tsd').directive('requestButtons', function () {
    return {
        restrict: 'E',
        templateUrl: 'view/request_buttons.html',
        scope: {
            options: '=',
            selected: '='
        },
        controller: function ($scope) {
            $scope.select = function (option) {
                $scope.selected = option
            }
        }
    };
});
