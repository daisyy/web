/**
 * Created by daisy on 14-9-16.
 */
angular.module('daisy.configs', ['ngRoute', 'daisy.controllers'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })
            .when('/tools', {
                templateUrl: 'partials/tools.html',
                controller: 'ToolsCtrl'
            })
            .when('/games', {
                templateUrl: 'partials/games.html',
                controller: 'GamesCtrl'
            })
            .when('/apps', {
                templateUrl: 'partials/apps.html',
                controller: 'AppsCtrl'
            })
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({redirectTo: '/home'});
}]);