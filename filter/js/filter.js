app.controller('filterCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$http.get('./data/global-beauty.json').then(function (data) {
		$scope.data = data.data.list;
	})
	$scope.showGoods = function () {
		$state.go('goods', {id : JSON.stringify(this.item)})
	} 
}])