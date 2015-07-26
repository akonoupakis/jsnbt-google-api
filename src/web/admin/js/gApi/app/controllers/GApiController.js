﻿; (function () {
    "use strict";

    angular.module("jsnbt")
        .controller('GApiController', function ($scope, $controller, $location, $logger, $timeout) {

            var logger = $logger.create('GApiController');

            $controller('SettingsBaseController', $scope.base.settings);

            $scope.back = function () {
                $location.previous('/modules');
            };

            $timeout(function () {
                $scope.setLocation();
                $scope.load().then(function () {
                    $scope.setSpy(200);
                }, function (ex) {
                    logger.error(ex);
                });
            }, 200);

        });

})();