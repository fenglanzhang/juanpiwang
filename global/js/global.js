app.controller('globalCtrl', ['$scope', '$http','$stateParams','lunbo', 'show',function ($scope
	, $http,$stateParams,lunbo,show) {
	
	//获取网络数据
	$http.get('/data/global-02.json').success(function (data) {
		$scope.bannerData = data.data.banner_ads;
		$scope.childData = data.data.module_ads.multi_block[0].data[0].child;
		lunbo.lunbo();
	})
	
	$http.get('/data/global-03.json').success(function (data) {
		$scope.listData = data.list;
	})
	
	$scope.showShop = function () {
		var item = this.items;
		show.showShop(item);
	}
	$scope.showGoods = function () {
		var item = this.items;
		show.showGoods(item);
	}
	console.log($scope.$stateParams);
}])