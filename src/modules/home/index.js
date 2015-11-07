import angular from 'angular';
import uirouter from 'angular-ui-router';

import HomeCtrl from './home.ctrl';

export default angular.module('app.home', [uirouter])
    .config(routes)
    .controller('HomeCtrl', HomeCtrl)
    .name;

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
}
