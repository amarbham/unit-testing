(function () {
    'use strict';
    angular.module('app')
        .service('UsersService', UsersService);

    function UsersService($localStorage) {

        var service = {
            list: list,
            add: add
        };

        return service;

        function list(){
            return $localStorage;
        };

        function add(key, val){
            return $localStorage[key] = val;
        };

        function remove(key){
            delete $localStorage[key];
        };


        // var Users = {
        //     getList: getList,
        //     getById: getById
        // }

        // var userList = [
        //     {
        //         id: '1',
        //         name: 'Jane',
        //         role: 'Designer',
        //         location: 'New York',
        //         twitter: 'gijane'
        //     },
        //     {
        //         id: '2',
        //         name: 'Bob',
        //         role: 'Developer',
        //         location: 'New York',
        //         twitter: 'billybob'
        //     },
        //     {
        //         id: '3',
        //         name: 'Jim',
        //         role: 'Developer',
        //         location: 'Chicago',
        //         twitter: 'jimbo'
        //     },
        //     {
        //         id: '4',
        //         name: 'Bill',
        //         role: 'Designer',
        //         location: 'LA',
        //         twitter: 'dabill'
        //     }
        // ];



        // function getList() {
        //     return userList;
        // };

        // function getById(id) {
        //     return userList.find(function (user) {
        //         return user.id == id
        //     });
        // };

       // return Users;
    };
} ());