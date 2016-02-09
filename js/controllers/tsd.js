angular.module('tsd').controller('TsdController', function ($scope, $rootScope, $cookies) {
    $scope.buttons = [
        {name: 'Запрос на замену ремонт оборудования', class: "fa-gears", type: "fix_hardware"},
        {name: 'Запрос на доступ к ресурсам', class: "fa-key", type: "access_resources"},
        {name: 'Сообщить о дефекте', class: "fa-bug", type: "bug"}
    ];

    $scope.forms = {};
    $scope.buttons.forEach(function (button) {
        $scope.forms[button.type] = $cookies.getObject(button.type)
    });
    console.log($scope.forms);

    $scope.save = function (form) {
        $cookies.putObject($scope.selectedButton.type, form);
        console.log(form);
    }
});
