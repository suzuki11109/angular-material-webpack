import angular from 'angular';

import toolbar from './toolbar/toolbar';

export default angular.module('components', [])
    .directive('toolbar', toolbar)
    .name;
