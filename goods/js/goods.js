app.controller('goodsCtrl', ['$scope', '$stateParams', 'cartServ','goodsServ', '$rootScope', '$state', function ($scope, $stateParams, cartServ,goodsServ, $rootScope, $state) {
	// console.log($rootScope.isLogin)
	$scope.flag=false;
	
	var itemStr = $stateParams.id
	$scope.listFn = function(){
		$scope.flag=!$scope.flag;
	}
	$scope.item = JSON.parse(itemStr)
	 
		$scope.addGoodToCart = function () {
			if ($rootScope.isLogin) {
				cartServ.addGoods($scope.item)
			}else{
				$state.go('login')
			}
		}
		$scope.goodsCollect = function () {
			var goodsItem = this.item;
			if ($rootScope.isLogin) {
				goodsServ.goodsCollect(goodsItem)
			}else{
				$state.go('login')
			}
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