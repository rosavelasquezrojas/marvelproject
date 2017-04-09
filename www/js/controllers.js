angular.module('starter.controllers', [])

.controller('AboutMeCtrl', function($scope) {})

.controller('ComicCtrl', function ($scope, $http, $timeout) {
  console.log('Comic Ctrl');
  $scope.getComics = function () {
    $http({
        method: 'GET'
      , url: 'http://gateway.marvel.com/v1/public/comics'
      , params: {
        'apikey': '5e3c597ae8d07e4eea2e83f3d86cc938'
        , 'ts': 9
        , 'hash': '50c223cf3ba4204a34c14fc49ff9f2b8'
      }
      , headers: {'Content-Type': 'application/json'}
    })
      .then(function (response) {
        if(response != "null") {
          console.log("comicsList");
          $scope.comics = response.data.data.results;
        }
      })
      .catch(function (err) {
        console.log('Error');
        console.log(err);
      })
  }
  $scope.doRefresh = function() {
    console.log('Refreshing!');
    $scope.getComics();
    $timeout( function() {
      $scope.$broadcast('scroll.refreshComplete');
    },1000);
  };
  $scope.getComics();
})

.controller('ComicDetailCtrl', function($scope, $http, $stateParams) {
    console.log('Comic Detail Ctrl');
    console.log($stateParams.comicID);
    $scope.getDetailComics = function () {
      $http({
        method: 'GET'
        , url: 'http://gateway.marvel.com/v1/public/comics'
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
            console.log("comic Detail");
            console.log(response.data.data.results[0]);
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
