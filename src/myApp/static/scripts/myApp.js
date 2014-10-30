define([
    'angular',
    'ionic',
    'uiRouter',
    'config/controllers/index'
    //'config/directives/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'ionic',
        'ui.router',
        'app.controllers'
        //'app.directives'
    ])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.StatusBar) {
                window.StatusBar.styleDefault();
            }
        });
    });
});
