; (function () {
    "use strict";

    angular.module("jsnbt-google-api", ['ngRoute'])
    .config(function ($routeProvider) {

        var TEMPLATE_BASE = jsnbt.constants.TEMPLATE_BASE;

        var router = new jsnbt.router('gApi', $routeProvider);
        
        router.when('/modules/gApi', function (x) {
            x.section('gApi');
            x.baseTemplate(TEMPLATE_BASE.settings);
            x.template('tmpl/gApi/settings.html');
            x.controller('GApiController');
        });
    });

})();