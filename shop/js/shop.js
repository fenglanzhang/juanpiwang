app.controller('shopCtrl', ['$http', '$scope', '$stateParams', function ($http, $scope, $stateParams) {
	var itemStr = $stateParams.id
	$scope.item = JSON.parse(itemStr)
}])