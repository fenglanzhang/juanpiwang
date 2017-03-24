app.controller('goodsCtrl', ['$scope', '$stateParams', 'cartServ','goodsServ',  function ($scope, $stateParams, cartServ,goodsServ) {
	var itemStr = $stateParams.id
	$scope.item = JSON.parse(itemStr)
	$scope.addGoodToCart = function () {
		cartServ.addGoods($scope.item)
	}
	$scope.goodsCollect = function () {
		var goodsItem = this.item;
		goodsServ.goodsCollect(goodsItem)
		console.log(this.item);
	
	}

}])

//商品收藏
.factory('goodsServ', [function () {
	var goodsArr = [];
	return {
		goodsArr : function () {
			return goodsArr;
		},
		
		goodsCollect : function (obj) {
			goodsArr.push(obj);
		}
	}
}])