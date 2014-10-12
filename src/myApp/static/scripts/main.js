require.config({
    baseUrl: './static/',
    paths: {
        angular: './vendor/angular/angular',
        uiRouter: './vendor/angular-ui-router/release/angular-ui-router',

        app: './scripts/modules/myApp'
    },
    shim: {
        angular: { exports: 'angular' },
        uiRouter: { deps: ['angular'] }
    }
});

define([
    'require',
    'angular',
    'app'
], function(require, angular) {
    'use strict';

    angular.bootstrap(document, ['app']);
});
