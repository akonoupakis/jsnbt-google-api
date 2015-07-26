; (function () {
    "use strict";

    angular.module("jsnbt")
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