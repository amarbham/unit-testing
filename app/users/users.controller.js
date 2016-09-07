(function () {
	'use strict';

	angular
		.module('app')
		.controller('UsersController', UsersController);

	UsersController.$inject = ['UsersService', '$http'];

	function UsersController(UsersService, $http) {
		var vm = this;
		vm.users = UsersService.all();
		vm.response;
		
		function activate(){
			return UsersService.get().then(function(response){
				return vm.response = response.data;
			});

		};

		activate();
	};
})();