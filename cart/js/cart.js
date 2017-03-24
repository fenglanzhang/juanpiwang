app.controller('cartCtrl', ['$scope', 'cartServ','totalMoney','$rootScope', 'judgeFlag', function ($scope, cartServ, totalMoney, $rootScope, judgeFlag) {
	$scope.itemArr = cartServ.getGoods()
	$scope.flag = judgeFlag.judge($scope.itemArr)

	console.log($scope.itemArr)
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
	}
	$scope.del = function () {
		cartServ.removeGoods(this.item)
		totalMoney1()
	}
	totalMoney1();
}])