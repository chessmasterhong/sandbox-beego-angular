require.config({
    baseUrl: './static/',
    paths: {
        angular: './vendor/angular/angular',
        domReady: './vendor/requirejs-domready/domready',
        uiRouter: './vendor/angular-ui-router/release/angular-ui-router',

        app: './scripts/myApp',
        config: './scripts/config',
        modules: './scripts/modules'
    },
    shim: {
        angular: { exports: 'angular' },
        uiRouter: { deps: ['angular'] }
    }
});

define([
    'require',
    'angular',
    'domReady!',
    'app',
    'config/routes'
], function(require, angular, document) {
    'use strict';

    angular.bootstrap(document, ['app']);
});
