describe('Colours service', function () {

    var coloursService;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_coloursService_) {
        coloursService = _coloursService_;
    }))

    it('should be defined', function () {
        expect(coloursService).toBeDefined();
    });

    it('should get colours data', function () {
        spyOn(coloursService, 'getColours').and.callThrough();
    });
});
