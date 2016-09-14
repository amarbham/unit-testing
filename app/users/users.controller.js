(function () {
	'use strict';

	angular
		.module('app')
		.controller('UsersController', UsersController);

	UsersController.$inject = ['coloursService', 'UsersService', '$http'];

	function UsersController(coloursService, UsersService, $http) {
		var vm = this;
		var UsersService = UsersService
		vm.response;

		////////////

		function activate() {
			return coloursService.getColours().then(function (response) {
				return vm.response = response.data;
			});

		};

		activate();

		////////////
	};
})();