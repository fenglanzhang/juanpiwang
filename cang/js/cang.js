
app.controller("cangCtrl",['$scope','$http','$state','cangFac', function($scope,$http,$state, cangFac){
	//  $http.get("/data/livingHomeCookhouseGoodsData.json").success(function(response){
	// 	$scope.date=response.list;
	// });
	// $http.get("/data/livingHomeDepartmentGoodsData.json").success(function(response){
	// 	console.log(1)
	// 	console.log(response.list)
	// 	$scope.date2=response.list;
	// });
	// $http.get("/data/livingHomeGoodsData.json").success(function(response){
	// 	console.log(1)

	// 	$scope.date3=response.list;
	// });
	// 	$http.get("/data/global-03.json").success(function(response){
	// 	$scope.date4=response.list;
	// });
	cangFac.getData1().then(function (response) {
		console.log(response.data.list)

		$scope.date = response.data.list
	})
	cangFac.getData2().then(function (response) {
		$scope.date2 = response.data.list
	})
	cangFac.getData3().then(function (response) {
		$scope.date3 = response.data.list
	})
	cangFac.getData4().then(function (response) {
		$scope.date4 = response.data.list
	})
	$scope.showGoods=function(){
		$state.go('goods',{ id:JSON.stringify(this.items) });
	}
}])
