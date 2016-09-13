(function () {
    'use strict';

    angular
        .module('app')
        .factory('coloursService', coloursService);

    coloursService.$inject = ['$http'];

    function coloursService($http) {
        var service = {
            getColours: getColours
        };

        return service;

        ////////////////
        function getColours() {
            return $http.get('colours/colours.json')
                .then(function (response) {
                    return response;
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
    }
})();