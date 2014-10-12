define([
    'angular',
    'uiRouter',
], function(angular) {
    'use strict';

    return angular.module('app', [
        'ui.router'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'static/scripts/modules/home/home.partial.html'
            });
    });
});
