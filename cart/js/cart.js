app.controller('cartCtrl', ['$scope', 'cartServ','totalMoney', function ($scope, cartServ, totalMoney) {
	$scope.itemArr = cartServ.getGoods()
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