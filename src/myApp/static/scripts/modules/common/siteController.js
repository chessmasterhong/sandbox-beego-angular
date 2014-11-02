define([
    'config/controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('siteController', function($scope) {
        $scope.siteTitle = 'My App';

        $scope.$on('$stateChangeSuccess', function(event, toState) {
            $scope.pageTitle = toState.data.pageTitle;
        });
    });
});
