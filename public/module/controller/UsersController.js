sampleApp.controller('UsersController', function($scope, $http) {

		var userlist = function(){
		$http.get('/userData').success(function(response){
			$scope.userList = response;
			//$scope.userInfo = "";
		});
	}

	userlist();  //run the refresh function at load
	
	$scope.remove = function(id){
		$http.delete('/deleteData/' + id).success(function(response){
			userlist();
		});
	};
});
