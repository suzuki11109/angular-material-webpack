import angular from 'angular';
import uirouter from 'angular-ui-router';

import HomeCtrl from './home.ctrl';
import routes from './home.routes';

export default angular.module('app.home', [uirouter])
    .config(routes)
    .controller('HomeCtrl', HomeCtrl)
    .name;
