export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
}
