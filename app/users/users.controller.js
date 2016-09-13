(function () {
	'use strict';

	angular
		.module('app')
		.controller('UsersController', UsersController);

	UsersController.$inject = ['coloursService', 'UsersService', '$http', '$localStorage'];

	function UsersController(coloursService, UsersService, $http, $localStoage) {
		var vm = this;
		vm.users = UsersService.getList();
		vm.response;
		
		function activate(){
			return coloursService.getColours().then(function(response){
				return vm.response = response.data;
			});

		};

		activate();
	};
})();