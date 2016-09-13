(function () {
    'use strict';
    angular.module('app')
        .factory('UsersService', UsersService);

    function UsersService($http) {
        var Users = {}

        var userList = [
            {
                id: '1',
                name: 'Jane',
                role: 'Designer',
                location: 'New York',
                twitter: 'gijane'
            },
            {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob'
            },
            {
                id: '3',
                name: 'Jim',
                role: 'Developer',
                location: 'Chicago',
                twitter: 'jimbo'
            },
            {
                id: '4',
                name: 'Bill',
                role: 'Designer',
                location: 'LA',
                twitter: 'dabill'
            }
        ];

        Users.getList = function () {
            return userList;
        };

        Users.getById = function (id) {
            return userList.find(function (user) {
                return user.id == id
            });
        };

        return Users;
    };
} ());