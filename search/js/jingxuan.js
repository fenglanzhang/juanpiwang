app.controller('jingxuanCtrl', ['$scope', '$http', function($scope,$http){
	$http.get('./data/searchData.json').success(function(data){
		$scope.data = data;
		console.log(data);
	});
}]);
app.controller('girlsCtrl', ['$scope', '$http', function($scope,$http){
	$http.get('./data/searchData.json').success(function(data){
		$scope.data = data;
		console.log(data);
	});
}]);
app.controller('boysCtrl', ['$scope', '$http', function($scope,$http){
	$http.get('./data/searchData.json').success(function(data){
		$scope.data = data;
		console.log(data);
	});
}]);