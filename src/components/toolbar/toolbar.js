function toolbar() {
    return {
        restrict: 'E',
        template: require('./toolbar.html')
    };
}

export default angular.module('toolbar', [])
    .directive('toolbar', toolbar)
    .name;
