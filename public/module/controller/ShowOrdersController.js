
sampleApp.controller('ShowOrdersController', function($scope, $http) {

	//function to add new user
	$scope.login = function(userInfo){
		$http.post('/login', userInfo).success(function(response){
				console.log("user login.");

		});
		}

});