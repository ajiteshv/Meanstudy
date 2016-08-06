sampleApp.controller('AddOrderController', function($scope, $http) {
	
//function to add new user
	$scope.registration = function(userInfo){
		$http.post('/createData', userInfo).success(function(response){
				console.log("Data saved.");

		});
		}
});