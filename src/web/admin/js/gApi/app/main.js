; (function () {
    "use strict";

    angular.module("jsnbt-google-api", ['ngRoute'])
    .config(function ($routeProvider) {

        var router = angular.getRouter($routeProvider);

        router.
            when('/modules/gApi', {
                controller: 'GApiController',
                baseTemplateUrl: 'tmpl/core/base/settings.html',
                templateUrl: 'tmpl/gApi/settings.html',
                section: 'gApi',
                domain: 'gApi'
            });
    });

})();