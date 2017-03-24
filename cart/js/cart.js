app.controller('cartCtrl', ['$scope', 'cartServ','totalMoney','$rootScope', function ($scope, cartServ, totalMoney, $rootScope) {
	$scope.itemArr = cartServ.getGoods()
	// $scope.flag = judgeFlag.judge($scope.itemArr)
	// console.log(Boolean($scope.itemArr))
	function judge () {
		if ($scope.itemArr.length == 0) {
			$scope.isShow = false
		} else{
			$scope.isShow = true
		}
	}
	judge()
	function totalMoney1 () {
		$scope.money = totalMoney.allMoney().toFixed(2)
	}
	$scope.add = function () {
		this.item.count++
		totalMoney1()
	}
	$scope.sub = function () {
		if (this.item.count == 1) {
			cartServ.removeGoods(this.item)
		}else{
			this.item.count--
		}
		totalMoney1()
		judge()
		
	}
	$scope.del = function () {
		cartServ.removeGoods(this.item)
		totalMoney1()
		judge()
	}
	totalMoney1();
}])