require.config({
    baseUrl: './static/',
    paths: {
        angular: './vendor/angular/angular',
        uiRouter: './vendor/angular-ui-router/release/angular-ui-router',

        app: './scripts/modules/myApp',
        routes: './scripts/modules/common/routes'
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
