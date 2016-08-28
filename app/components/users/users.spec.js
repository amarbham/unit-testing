
describe('Users controller', function () {

    var $controller, UsersController;

    beforeEach(angular.mock.module('ui-router'));
    beforeEach(angular.mock.module('component.users'));

    beforeEach(inject(function (_controller_) {
        $controller = _controller_;
        UsersController = $controller('UsersController', {});
    }))

    it('should be defined', function () {
        expect(UsersController).toBeDefined();
    });


});
