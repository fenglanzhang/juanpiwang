//配置homeCtrl控制器
app.controller('homeCtrl', ['$scope', '$http', 'homeFac','$state', 'lunbo', function ($scope, $http, homeFac, $state, lunbo) {
	// $http.get('/data/today.json').success(function (data) {
	// 	$scope.data = data.product
	// 	console.log($scope.data)
	// })
	homeFac.getHomeData1().then(function (data) {
		console.log(data.data.list)
		
		$scope.data = data.data.list
	})
	// homeFac.getHomeData2().then(function (data) {
	// 	$scope.data1 = data.data
	// })
	homeFac.getHomeData3().then(function (data) {
		$scope.data2 = data.data.list
	})
	homeFac.getHomeData4().then(function (data) {
		$scope.data3 = data.data.list
	})
	homeFac.getLunbo().then(function (data) {
		$scope.lunboData = data.data.data.banner_ads
		lunbo.lunbo()
	})
	homeFac.getLunbo1().then(function (data) {
		$scope.lunboData1 = data.data.data.banner_ads
		lunbo.lunbo()
		
	})
	homeFac.getLunbo2().then(function (data) {
		$scope.lunboData2 = data.data.data.banner_ads
	})

	$scope.showShop = function () {
		$state.go('shop', {id:JSON.stringify(this.item)})
	}
	$scope.showGoods = function () {
		console.log(this.item)
		$state.go('goods', {id:JSON.stringify(this.item)})
	}   

}])
