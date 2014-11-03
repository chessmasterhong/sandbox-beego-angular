define([
    'config/controllers/module'
], function(controllers) {
    'use strict';

    controllers.controller('headController', function($scope) {
        $scope.siteTitle = 'My App';
    });
});
