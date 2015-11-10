import randomNames from './randomNames';

let service;

describe('Test random', function() {

    beforeEach(function() {
        service = new randomNames();
    });

    it('should initial names', function() {
        expect(service.names).toEqual(['John', 'Elisa', 'Mark', 'Annie']);
    });
});
