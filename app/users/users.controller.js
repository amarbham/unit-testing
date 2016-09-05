(function() {
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('app')
  .controller('UsersController', function(Users) {
    var vm = this;
    vm.users = Users.all();
  })
})();
