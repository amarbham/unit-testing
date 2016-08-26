
describe('Users factory', function() {
    
    var Users;
    // run code beforeEach code is executed.
    beforeEach(angular.mock.module('api.users'));
        
    beforeEach(inject(function(_Users_){
        Users = _Users_;
    }));   

    
    it('should exist', function() {
        expect(Users).toBeDefined();
    });
    
    it('should exist .all()', function(){
        expect(Users.all).toBeDefined();
    });
});