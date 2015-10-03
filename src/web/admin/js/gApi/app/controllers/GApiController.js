; (function () {
    "use strict";

    var SettingsController = function ($scope, $route, $location, $jsnbt) {
        jsnbt.controllers.SettingsControllerBase.apply(this, $scope.getBaseArguments($scope));
        
        $scope.init();
    };
    SettingsController.prototype = Object.create(jsnbt.controllers.SettingsControllerBase.prototype);

    angular.module("jsnbt-google-api")
        .controller('GApiController', ['$scope', '$route', '$location', '$jsnbt', SettingsController]);

})();