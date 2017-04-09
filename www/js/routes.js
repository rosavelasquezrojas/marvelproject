/**
 * Created by rvela on 08-04-2017.
 */
angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/aboutme',
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-aboutme.html',
          controller: 'AboutMeCtrl'
        }
      }
    })

    .state('tab.comics', {
      url: '/comics',
      views: {
        'tab-comics': {
          templateUrl: 'templates/tab-comics.html',
          controller: 'ComicCtrl'
        }
      }
    })

    .state('tab.comics-detail', {
      url: '/comics/:comicID',
      views: {
        'tab-comics': {
          templateUrl: 'templates/comic-detail.html',
          controller: 'ComicDetailCtrl'
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/comics');

});

