define([
    'config/controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('bodyController', function($scope) {
        $scope.$on('$stateChangeSuccess', function(event, toState) {
            $scope.pageTitle = toState.data.pageTitle;
        });
    });
});
