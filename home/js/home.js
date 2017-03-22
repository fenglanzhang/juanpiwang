//配置homeCtrl控制器
app.controller('homeCtrl', ['$scope', '$http', 'homeFac','$state', function ($scope, $http, homeFac, $state) {
	// $http.get('/data/today.json').success(function (data) {
	// 	$scope.data = data.product
	// 	console.log($scope.data)
	// })
	homeFac.getHomeData1().then(function (data) {
		$scope.data = data.data.product
	})
	homeFac.getHomeData2().then(function (data) {
		$scope.data1 = data.data
	})
	homeFac.getHomeData3().then(function (data) {
		$scope.data2 = data.data.list
	})
	$scope.showShop = function () {
		$state.go('shop', {id:JSON.stringify(this.item)})
	}
	$scope.showGoods = function () {
		console.log(this.item)
		$state.go('goods', {id:JSON.stringify(this.item)})
	}
}])