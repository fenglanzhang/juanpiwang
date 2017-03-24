app.controller('collectFstCtrl', ['$scope', '$http', 'goodsServ','cartServ' , function ($scope,$http,goodsServ,cartServ) {
	$scope.data = goodsServ.goodsArr();
	
	$scope.addGoods = function () {
		console.log(this.item);
		cartServ.addGoods(this.item);
	}
}])