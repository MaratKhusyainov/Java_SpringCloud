(function ($localStorage) {
    'use strict';

    angular
        .module('app', [])
        .config(config)
        .run(run);

    function config($httpProvider) {
    }

    function run() {
    }
})();

angular.module('app').controller('indexController', function ($scope, $http) {
    const contextPath = 'http://localhost:5555/cloud/api/v1';

    $scope.fillTable = function () {
        $http({
            url: contextPath + '/products',

            method: 'GET'
        }).then(function (response) {
            $scope.ProductsList = response.data;
        });
    };

    $scope.deleteProductById = function (productId) {
        $http.delete(contextPath + '/products/' + productId)
            .then(function (response) {
                $scope.fillTable();
            });
    }

    $scope.submitCreateNewProduct = function () {
        $http.post(contextPath + '/products', $scope.newProduct)
            .then(function (response) {
                $scope.newProduct = null;
                $scope.fillTable();
            });
    };

    $scope.fillTable();
});