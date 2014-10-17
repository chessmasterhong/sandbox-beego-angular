define([
    'angular',
    'ionic',
    'uiRouter',
    'config/controllers/index'
], function(angular) {
    'use strict';

    return angular.module('app', [
        'ionic',
        'ui.router',
        'app.controllers'
    ])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
});
