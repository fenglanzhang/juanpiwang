app.controller('filterCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$http.get('./data/global-beauty.json').then(function (data) {
		console.log(data.data.list)
		$scope.data = data.data.list;
	})
	$scope.showGoods = function () {
		console.log(this.item)
		$state.go('goods', {id : JSON.stringify(this.item)})
	} 
}])