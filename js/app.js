(function (angular) {
    angular.module('tsd', ['form'])
        .directive('requestButton', function () {
            return {
                restrict: 'E',
                scope: {
                    name: '=',
                    icon: '='
                },
                template: '<div class="btn request-button"> <span class="request-button-icon">{{icon}}</span><span class="request-button-name">{{name}}</span> </div>'
            };
        });
})(window.angular);

(function (angular) {
    angular.module('tsd')
        .controller('requestCtrl', function ($rootScope, requestService) {
            $rootScope.equipment = requestService.equipment;
            $rootScope.access = requestService.access;
            $rootScope.bugReport = requestService.bugReport;
        });
})(window.angular);

(function (angular) {
    angular.module('tsd')
        .factory('requestService', [function () {
            var equipment = {
                title: '?????? ?? ??????/?????? ????????????',
                icon: 'icon'
            };
            var access = {
                title: '?????? ?? ?????? ? ????????',
                icon: 'icon'
            };
            var bugReport = {
                title: '???????? ? ???????',
                icon: 'icon'
            };

            return {
                equipment: equipment,
                access: access,
                bugReport: bugReport
            }
        }]);
})(window.angular);