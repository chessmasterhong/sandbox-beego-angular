define([
    'app'
], function(app) {
    'use strict';

    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'static/scripts/modules/home/home.partial.html'
            });
    }]);
});
