var myApp = angular.module('myApp', [
    'ui.router'
])
.config(function($stateProvider) {
    'use strict';

    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'static/scripts/modules/home/home.partial.html'
        });
});
