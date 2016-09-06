(function () {
	'use strict';

	angular
		.module('app')
		.controller('UsersController', UsersController);

	UsersController.$inject = ['UsersService'];

	function UsersController(UsersService) {
		var vm = this;
		vm.users = UsersService.all();
	}
})();