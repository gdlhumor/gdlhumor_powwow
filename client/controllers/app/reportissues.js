angular.module('app').controller('app_reportissues', app_reportissues);
function app_reportissues($scope, app) {
    'use strict';
    app.init($scope);
}
function get_Description()
{
    return $scope.data.description?? $scope.data.summary
}