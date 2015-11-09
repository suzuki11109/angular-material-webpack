import HomeCtrl from './home.ctrl';
import randomNames from '../../services/random.name.svc';

let ctrl;

describe('constructor', function() {
    it('should set name to world', function() {
        ctrl = new HomeCtrl();
        expect(ctrl.name).toEqual('World');
    });
});

describe('changeName', function() {
    it('should set name to angular-tips', function() {
        ctrl = new HomeCtrl();
        ctrl.changeName();
        expect(ctrl.name).toEqual('angular-tips');
    });
});

describe('randomName', function() {
    it('should set name from random', function() {
        var random = new randomNames();
        spyOn(random, 'getName');
        ctrl = new HomeCtrl(random);

        ctrl.randomName();

        expect(random.getName).toHaveBeenCalled();
    });
});
