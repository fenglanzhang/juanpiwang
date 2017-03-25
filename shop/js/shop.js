app.controller('shopCtrl', ['$http', '$scope', '$stateParams','$state','collectServ','$interval',function ($http, $scope, $stateParams, $state,collectServ, $interval) {
	var itemStr = $stateParams.id;
	// var flag = false;
	$scope.item = JSON.parse(itemStr);
	var itemObj = $scope.item

	$scope.onlyTime = $scope.item.end_time - $scope.item.start_time
	function addZero (num) {
		return num > 10 ? num : '0' + num
	}
	function dateFormat () {
		return addZero(parseInt($scope.onlyTime/100/60/60)) + '时' + addZero(parseInt($scope.onlyTime/(100*60)%60)) + '分' + parseInt($scope.onlyTime/100 %60) + '秒'
	}
	$scope.time = dateFormat($scope.onlyTime)
	$interval(function () {
		$scope.onlyTime -= 100
		$scope.time = dateFormat($scope.onlyTime)
	}, 1000)

	$scope.changeAttr = function (attr) {
		$scope.attribute = attr
	}
	$scope.filterAttr = function (num) {
		$scope.num = num
		$scope.attribute = 'oprice'
	}	 
	

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

