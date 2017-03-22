app.controller('goodsCtrl', ['$scope', '$stateParams', 'cartServ', function ($scope, $stateParams, cartServ) {
	var itemStr = $stateParams.id
	$scope.item = JSON.parse(itemStr)
	$scope.addGoodToCart = function () {
		cartServ.addGoods($scope.item)
	}


}])