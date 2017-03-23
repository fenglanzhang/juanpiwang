app.controller('shopCtrl', ['$http', '$scope', '$stateParams','$state', function ($http, $scope, $stateParams, $state) {
	var itemStr = $stateParams.id
	$scope.item = JSON.parse(itemStr)
	$scope.showGoods = function () {
		console.log(this)
		$state.go('goods', {id: JSON.stringify(this.items)})
	}
}])