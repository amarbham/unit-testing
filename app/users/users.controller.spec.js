describe('Users controller', function () {

    var $controller, UsersController, UsersFactory, $httpBackend, coloursService, $storage;

    // Mock the list of users we expect to use in our controller
    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$controller_, _UsersService_, _$httpBackend_, _coloursService_, _$localStorage_) {
        coloursService = _coloursService_;
        UsersFactory = _UsersService_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $storage  = _$localStorage_;

        //Add controller dependencies
        vm = $controller('UsersController', { UsersFactory: UsersFactory, coloursService: coloursService });

    }));

    it('should be defined', function () {
        expect(vm).toBeDefined();
    });


    it('should initialise with a request for colours data', function () {
        var response = {
            foo: 'bar'
        };

        $httpBackend
            .when('GET', 'colours/colours.json')
            .respond(200, response);

        expect($httpBackend.flush).not.toThrow();
        //As soon as well call $httpBackend.flush(); the expectations we setup are verified in sequence.
        expect(vm.response).toEqual(response);
    });
});