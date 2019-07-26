myApp.controller('empController', function($scope,$route,$routeParams,$http){
	$scope.getEmployees = function(){
		$http.get('https://t1708m-assignment-247613.appspot.com/api/v1/article?catId=1563988844949').then(function(response){
			$scope.employees = response.data.data;
			console.log($scope.employees);
		});
	};
	$scope.getEmployees3 = function(){
		$http.get('https://t1708m-assignment-247613.appspot.com/api/v1/article?catId=15639').then(function(response){
			$scope.employees = response.data.data;
			console.log($scope.employees);
		});
	};
	$scope.showEmployee = function(){
		var id = $routeParams.id;
		alert(id);
		$http.get('https://t1708m-assignment-247613.appspot.com/api/v1/article?id='+ id).then(function(response){
			$scope.employee = response.data.data;
			console.log($scope.employees);
		});
	};
	$scope.addEmployee = function(){
		//var id = $routeParams.id;
		$http.post('/api/employees/', $scope.employee).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};
	$scope.updateEmployee = function(){
		var id = $routeParams.id;
		$http.put('/api/employees/'+ id , $scope.employee).then(function(response){
			//$scope.employee = response.data;
			window.location.href = '/';
		});
	};
	$scope.deleteEmployee = function(id){
		var id = id;
		$http.delete('/api/employees/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});