export default class HomeCtrl {
    constructor(randomNames) {
        'ngInject';
        this.randomNames = randomNames;
        this.name = 'World';
    }
    changeName() {
        this.name = 'angular-tips';
    }
    randomName() {
        this.name = this.randomNames.getName();
    }
}
