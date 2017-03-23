app.controller('collectScdCtrl', ['$scope', '$http', '$stateParams','collectServ', '$state',function ($scope,$http,$stateParams,collectServ,$state) {
	$scope.data = collectServ.collectArr();
	console.log($scope.data);
	$scope.showShop = function () {
		console.log(this);
		$state.go('shop', {id:JSON.stringify(this.item)});
	}
}])