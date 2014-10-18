define([
    'app'
], function(app) {
    'use strict';

    return app.config(function($stateProvider) {
        $stateProvider
            .state('main', {
                abstract: 'true',
                templateUrl: 'static/scripts/modules/common/sidebar.partial.html'
            })
            .state('main.home', {
                url: '',
                templateUrl: 'static/scripts/modules/home/home.partial.html'
            });
    });
});
