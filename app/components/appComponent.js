(function () {
    'use strict';
    angular.module('app')
        .component('menuBar', {
            bindings: {
                title: '@'
            },
            templateUrl: 'accordian/appComponent.html',
            controller: function () {
                
                this.menu = [{
                    name: "Home",
                    component: "home"
                }, {
                    name: "About",
                    component: "about"
                }, {
                    name: "Contact",
                    component: "contact"
                }];
            }
        });
}());