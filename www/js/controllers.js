angular.module('starter.controllers', [])

.controller('AboutMeCtrl', function($scope) {})

.controller('ComicCtrl', function ($scope, $http, $timeout) {
  $scope.getComics = function () {
    $http({
        method: 'GET'
      , url: 'https://gateway.marvel.com/v1/public/comics'
      , params: {
        'apikey': '5e3c597ae8d07e4eea2e83f3d86cc938'
        , 'ts': 9
        , 'hash': '50c223cf3ba4204a34c14fc49ff9f2b8'
        , 'limit': 50
      }
      , headers: {'Content-Type': 'application/json'}
    })
      .then(function (response) {
        if(response != "null") {
          $scope.comics = response.data.data.results;
        }
      })
      .catch(function (err) {
        console.log('Error');
        console.log(err);
      })
  }
  $scope.doRefresh = function() {
    $scope.getComics();
    $timeout( function() {
      $scope.$broadcast('scroll.refreshComplete');
    },1000);
  };
  $scope.getComics();
})

.controller('ComicDetailCtrl', function($scope, $http, $stateParams) {
    $scope.getDetailComics = function () {
      $http({
        method: 'GET'
        , url: 'https://gateway.marvel.com/v1/public/comics'
        , params: {
          'apikey': '5e3c597ae8d07e4eea2e83f3d86cc938'
          , 'ts': 9
          , 'hash': '50c223cf3ba4204a34c14fc49ff9f2b8'
          , 'id': $stateParams.comicID
        }
        , headers: {'Content-Type': 'application/json'}
      })
        .then(function (response) {

          if(response != "null") {
            $scope.comic = response.data.data.results[0];

          }
        })
        .catch(function (err) {
          console.log('Error');
          console.log(err);
        })
    }
    $scope.getDetailComics();

  });
