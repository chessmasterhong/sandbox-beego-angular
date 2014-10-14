require.config({
    baseUrl: './static/',
    paths: {
        angular: './vendor/angular/angular',
        uiRouter: './vendor/angular-ui-router/release/angular-ui-router',

        app: './scripts/myApp',
        routes: './scripts/config/routes'
    },
    shim: {
        angular: { exports: 'angular' },
        uiRouter: { deps: ['angular'] }
    }
});

define([
    'require',
    'angular',
    'app',
    'routes'
], function(require, angular) {
    'use strict';

    angular.bootstrap(document, ['app']);
});
