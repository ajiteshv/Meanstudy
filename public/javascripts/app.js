//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);
         
         sampleApp.controller('studentController', function($scope) {
          /*   $scope.reset = function(){
               $scope.email = "";
               $scope.password = "";
			   $scope.username = "";
            }
            
            $scope.reset(); */
			
         });

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
		templateUrl: 'templates/add_order.html',
		controller: 'AddOrderController'
	}).
	when('/UserList', {
		templateUrl: 'templates/userlist.html',
		controller: 'UsersController'
      }).
      when('/ShowOrders', {
		templateUrl: 'templates/show_orders.html',
		controller: 'ShowOrdersController'
      }).
      otherwise({
		redirectTo: '/ShowOrders'
      });
}]);

