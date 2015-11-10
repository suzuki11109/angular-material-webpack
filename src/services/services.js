import angular from 'angular';

import randomNames from './randomNames';

export default angular.module('services', [])
    .service('randomNames', randomNames)
    .name;
