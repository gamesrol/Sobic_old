var app = angular.module('vg', ["ngCookies",'ui.bootstrap','dialogs']);

app.config(['$routeProvider', function($routeProvider) {	
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'home'
      }).when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contact'
      }).
      otherwise({
        redirectTo: '/'
      });

    
  }]);
