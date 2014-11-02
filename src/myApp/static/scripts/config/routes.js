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
                    menuContent: {
                        templateUrl: 'static/partials/home.partial.html'
                    }
                },
                data: {
                    pageTitle: 'Home'
                }
            })
            .state('main.about', {
                url: '/about',
                views: {
                    menuContent: {
                        templateUrl: 'static/partials/about.partial.html'
                    }
                },
                data: {
                    pageTitle: 'About'
                }
            })
            .state('main.help', {
                url: '/help',
                views: {
                    menuContent: {
                        templateUrl: 'static/partials/help.partial.html'
                    }
                },
                data: {
                    pageTitle: 'Help'
                }
            });
    });
});
