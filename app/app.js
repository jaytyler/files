'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.files'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/files'});
}]);
