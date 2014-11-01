define([
    'app'
], function(app) {
    'use strict';

    return app.config(function($stateProvider) {
        $stateProvider
            .state('main', {
                abstract: 'true',
                templateUrl: 'static/partials/sidebar.partial.html'
            })
            .state('main.home', {
                url: '',
                views: {
                    'menuContent': {
                        templateUrl: 'static/partials/home.partial.html'
                    }
                }
            })
            .state('main.about', {
                url: '/about',
                views: {
                    'menuContent': {
                        templateUrl: 'static/partials/about.partial.html'
                    }
                }
            })
            .state('main.help', {
                url: '/help',
                views: {
                    'menuContent': {
                        templateUrl: 'static/partials/help.partial.html'
                    }
                }
            });
    });
});
