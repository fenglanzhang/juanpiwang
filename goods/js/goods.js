app.controller('goodsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
	var itemStr = $stateParams.id
	$scope.item = JSON.parse(itemStr)
}])