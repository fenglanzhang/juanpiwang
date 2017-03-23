app.controller('limitCtrl', ['$scope', 'limitFac', '$state', function ($scope, limitFac, $state) {
	limitFac.getLimitGoods().then(function (data) {
		console.log(data.data.list)
		$scope.data = data.data.list
		$scope.showGoods = function () {
			$state.go('goods', {id : JSON.stringify(this.item)})
			// console.log('goods', {id : JSON.stringify(this.item)})
		}
	})
}])