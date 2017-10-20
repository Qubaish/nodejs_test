angular.module('app')
  .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider
      .when('/payments', { templateUrl: 'payments.html' })
      .otherwise({ redirectTo: '/404' });


}]);
