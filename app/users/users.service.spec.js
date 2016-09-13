
describe('Users factory', function () {

    var Users;

    var usersList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
        }
    ];
    // run code beforeEach code is executed.
    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_UsersService_) {
        Users = _UsersService_;
    }));


    it('should exist', function () {
        expect(Users).toBeDefined();
    });

    it('should return all users', function () {
        expect(Users.getList()).toEqual(usersList);
    });

    it('should return a user by id', function () {
        var user = usersList[0]

        expect(Users.getById('1')).toEqual(user);
    });


    it('should return not defined if user does not exist', function () {
        expect(Users.getById('ABC')).not.toBeDefined();
    });

    //  $httpBackend.when() Using when allows us to configure a fake response to a particular http request based on its parameters.

});