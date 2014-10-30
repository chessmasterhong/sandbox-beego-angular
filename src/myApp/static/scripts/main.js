require.config({
    baseUrl: './static/',
    paths: {
        angular: './vendor/angular/angular',
        d3: './vendor/d3/d3.js',
        domReady: './vendor/requirejs-domready/domready',
        ionic: './vendor/ionic/release/js/ionic.bundle',
        uiRouter: './vendor/angular-ui-router/release/angular-ui-router',

        app: './scripts/myApp',
        config: './scripts/config',
        modules: './scripts/modules'
    },
    shim: {
        angular: { exports: 'angular' },
        ionic: { deps: ['angular', 'uiRouter'] },
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
