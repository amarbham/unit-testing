describe('Users controller', function () {

    var $controller, UsersController, UsersFactory, $httpBackend;

    // Mock the list of users we expect to use in our controller
    var userList = [
        { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
        { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
        { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
        { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
    ];

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$controller_, _UsersService_, _$httpBackend_) {
        $controller = _$controller_;
        UsersFactory = _UsersService_;
        $httpBackend = _$httpBackend_;

        // Spy and force the return value when UsersFactory.all() is called
        spyOn(UsersFactory, 'all').and.callFake(function () {
            return userList
        })
        // Add the factory as a controller dependency
        UsersController = $controller('UsersController', { UsersFactory: UsersFactory });

    }))

    it('should be defined', function () {
        expect(UsersController).toBeDefined();
    });


    it('should initialise with a call to Users.all()', function () {
        // The first expectation uses the spy we declared above and simply expects that a call to the all method will be made
        expect(UsersFactory.all).toHaveBeenCalled();
        expect(UsersController.users).toEqual(userList);
    });

    it('should make a request for data', function () {

        $httpBackend
            .when('GET', 'users/data.json')
            .respond(200, { foo: 'bar' });

        expect($httpBackend.flush).not.toThrow();
        //As soon as well call $httpBackend.flush(); the expectations we setup are verified in sequence.
        expect(UsersController.response).toEqual({ foo: 'bar' });
    });
});