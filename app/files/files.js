'use strict'

angular.module('myApp.files', ['ngRoute'])

       .config(['$routeProvider', function ($routeProvider) {
         $routeProvider.when('/files', {
           templateUrl : 'files/files.html',
           controller  : 'FilesCtrl',
           controllerAs: 'myApp'
         })
       }])

       .controller('FilesCtrl', function ($scope, $http) {

         $http.get('data.json').then(function (res) {
           $scope.data         = res.data
           $scope.parentFolder = null
           $scope.activeSort   = 'name'
           $scope.data.forEach(function (item) {
             if (typeof item.added !== 'undefined') {
               item.added = new Date(item.added)
               item.addedDisplayString = item.added
             }
           })
         })

         $scope.itemClick = function (item) {
           if (item.children > 0) {
             $scope.previousParentFolder = $scope.parentFolder
             $scope.parentFolder         = item.name
           }
         }

         $scope.back = function () {
           $scope.parentFolder = $scope.previousParentFolder
         }

         $scope.sort = function (activeSort) {
           $scope.activeSort = activeSort
         }

       })