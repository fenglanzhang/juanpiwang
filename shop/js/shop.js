app.controller('shopCtrl', ['$http', '$scope', '$stateParams','$state','collectServ',function ($http, $scope, $stateParams, $state,collectServ) {
	var itemStr = $stateParams.id;
	// var flag = false;
	$scope.item = JSON.parse(itemStr);
	var itemObj = $scope.item

	
	$scope.src = collectServ.src($scope.item);
	
	$scope.showGoods = function () {
		$state.go('goods', {id: JSON.stringify(this.items)})
	}
	
	$scope.collectFn = function () {
		$scope.item = this.item;
		$scope.item.flag = !$scope.item.flag; 
		$scope.src = collectServ.src($scope.item);
		// collectServ.collectItemFn($scope.item);
		collectServ.addCollect($scope.item)

	}
}])

