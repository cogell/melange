angular
.module('home')
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.tmpl.html'
    });
});