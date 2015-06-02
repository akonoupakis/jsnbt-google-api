; (function () {
    "use strict";

    angular.module("jsnbt-google-api", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.
            when('/modules/gApi', {
                templateUrl: 'tmpl/gApi/pages/main.html',
                controller: 'GApiController',
                section: 'gApi',
                domain: 'gApi'
            });
    });

})();