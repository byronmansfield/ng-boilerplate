'use strict';

angular.module('controllers', [
	'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngResource'
])

.controller('AppCtrl', ['$scope', function($scope) {
	$scope.mainPages = [
		{
			'name': 'home',
			'link': 'home'
		},
		{
			'name': 'about',
			'link': 'about'
		},
		{
			'name': 'contact',
			'link': 'contact'
		}
	];
}])

.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.pageTitle = 'Home Page | Angular Boilerplate';
}])

.controller('AboutCtrl', ['$scope', function($scope) {
	$scope.pageTitle = 'About Page | Angular Boilerplate';
}])

.controller('ContactCtrl', ['$scope', function($scope) {
	$scope.pageTitle = 'Contact Page | Angular Boilerplate';
}])

;
