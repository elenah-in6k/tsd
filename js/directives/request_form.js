angular.module('tsd').directive('requestForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'view/request_form.html',
        scope: {
            selectedButton: '=',
            form: '=',
            save: '='
        },
        controller: function ($scope) {
            $scope.template = {};
            $scope.initTemplateName = function () {
                $scope.template.name = "view/forms/" + $scope.selectedButton.type + ".html"
            };
            $scope.$watch('selectedButton', function () {
                $scope.initTemplateName();
            })
        }
    };
});
