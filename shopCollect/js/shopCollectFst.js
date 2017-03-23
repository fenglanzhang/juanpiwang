app.controller('collectFstCtrl', ['$scope', '$http', 'goodsServ', function ($scope,$http,goodsServ) {
	$scope.data = goodsServ.goodsArr();
}])