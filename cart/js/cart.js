app.controller('cartCtrl', ['$scope', 'cartServ','totalMoney', function ($scope, cartServ, totalMoney) {
	$scope.itemArr = cartServ.getGoods()
	console.log($scope.itemArr)
	$scope.money = totalMoney.allMoney().toFixed(2)
}])