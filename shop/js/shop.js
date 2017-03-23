app.controller('shopCtrl', ['$http', '$scope', '$stateParams','$state','collectServ',function ($http, $scope, $stateParams, $state,collectServ) {
	var itemStr = $stateParams.id
	$scope.item = JSON.parse(itemStr)
	$scope.showGoods = function () {
		console.log(this)
		$state.go('goods', {id: JSON.stringify(this.items)})
	}
	
	$scope.collectFn = function () {
		var collectItem = this.item;
		console.log(collectItem);
		console.log(collectServ.collectArr())
		collectServ.collectItemFn(collectItem);
	}
	
}])

app.factory('collectServ',[ function () {
	var collectArr = [];
	return {
		collectArr : function () {
			return collectArr;
		},
		collectItemFn : function(item) {
			collectArr.push(item);
			return collectArr;
		}
	}
}])
