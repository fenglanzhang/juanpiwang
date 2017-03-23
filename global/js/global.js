app.controller('globalCtrl', ['$scope', '$http', function ($scope
	, $http) {
	
	//获取网络数据
	$http.get('/data/global-02.json').success(function (data) {
		$scope.bannerData = data.data.banner_ads;
		$scope.childData = data.data.module_ads.multi_block[0].data[0].child
		console.log($scope.childData);
	})
	
	$http.get('/data/global-03.json').success(function (data) {
		$scope.listData = data.list;
		console.log($scope.listData);
	})
}])