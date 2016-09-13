(function () {
	'use strict';

	angular
		.module('app')
		.controller('UsersController', UsersController);

	UsersController.$inject = ['coloursService', 'UsersService', '$http', '$localStorage'];

	function UsersController(coloursService, UsersService, $http, $localStorage) {
		var vm = this;
		vm.users = UsersService.getList();
		vm.response;

		var $storage = $localStorage;

		vm.form = $storage;

		function activate() {
			return coloursService.getColours().then(function (response) {
				return vm.response = response.data;
			});

		};

		$storage.item = {
			foo: 'bar'
		}

		activate();
	};
})();