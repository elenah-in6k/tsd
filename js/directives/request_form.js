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
            $scope.fixHardware = {
                reasons: ['Breakdown', 'Upgrade', 'Individual preference', 'Other'],
                criticalityLevels: ['Low: nice-to-have', 'Medium: ready to be patient, but not for too long', 'High: blocker for work']
            };
            $scope.services = ['Tahometer Ltd', 'HR Grades', 'HR Portal'];

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
