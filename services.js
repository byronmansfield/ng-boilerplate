'use strict';

angular.module('services', [
	'ui.router',
    'ngResource'
])

.service('ApiData', function($http, $q) {

	var defaultBaseUrl = 'http://api-example.com/';

	this.query = function(endpoint, type, querydata) {

		var deferred = $q.defer(),
			url = this.getApiUrl(endpoint),
			data;

		function onSuccess(data, status) {
			deferred.resolve(data);
		}

		function onError(data, status) {
			if(status === 403) {
				console.log('Error 403');
			}
			deferred.reject(data);
		}

		switch(type) {
			case 'GET':                  
				$http.get(url, {params: querydata}).success(onSuccess).error(onError);
				break;
			case 'POST':
				$http.post(url, querydata).success(onSuccess).error(onError);
				break;
		}
		return deferred.promise;
	};

	this.getApiUrl = function(endpoint) {
		var baseUrl, 
			url;

		baseUrl = defaultBaseUrl;
		url = baseUrl + endpoint;

		return url;
	};
})

;
