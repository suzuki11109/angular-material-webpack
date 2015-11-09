import angular from 'angular';

import randomNames from './random.name.svc';

export default angular.module('services', [])
    .service('randomNames', randomNames)
    .name;
