
sampleApp.controller('ShowOrdersController', function($scope, $http) {

	//function to add new user
	$scope.login = function(userInfo){
		$http.post('/loginuser', userInfo).success(function(response){
				console.log("user login.");

		});
		}

});