'use strict';

angular.module('app', [
	'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngResource',
    'controllers',
    'services'
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
	$urlRouterProvider.otherwise( '/home' );

	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.tpl.html',
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.tpl.html',
            controller: 'AboutCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/contact/contact.tpl.html',
            controller: 'ContactCtrl'
        })
    ;

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	$httpProvider.defaults.headers.common['Accept'] = 'application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

.run(function ($rootScope, $state, $stateParams, $http) {
    $http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With'];
})

;
