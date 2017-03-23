app.controller('globalCtrl', ['$scope', '$http','$stateParams','lunbo', function ($scope
	, $http,$stateParams,lunbo) {
	
	//获取网络数据
	$http.get('/data/global-02.json').success(function (data) {
		$scope.bannerData = data.data.banner_ads;
		$scope.childData = data.data.module_ads.multi_block[0].data[0].child;
		lunbo.lunbo();
	})
	
	$http.get('/data/global-03.json').success(function (data) {
		$scope.listData = data.list;
	})
	
	console.log($scope.$stateParams);
}])