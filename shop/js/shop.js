app.controller('shopCtrl', ['$http', '$scope', '$stateParams','$state','collectServ',function ($http, $scope, $stateParams, $state,collectServ) {
	var itemStr = $stateParams.id;
	// var flag = false;
	$scope.item = JSON.parse(itemStr);
	
	console.log("************************");
	console.log(collectServ.collectArr());
	console.log(collectServ.src());		
	console.log(collectServ.collectArr().indexOf($scope.item))
	
	$scope.src = collectServ.src($scope.item);
	
	$scope.showGoods = function () {
		$state.go('goods', {id: JSON.stringify(this.items)})
	}
	
	$scope.collectFn = function () {
		$scope.item = this.item;
		$scope.item.flag = true; 
		$scope.src = collectServ.src($scope.item,this.flag);
		collectServ.collectItemFn($scope.item);

		console.log(collectServ.collectArr());
		console.log(collectServ.src());
		console.log(collectServ.collectArr().indexOf($scope.item))
	}
}])

// app.factory('collectServ',[ function () {
// 	var collectArr = [];
// 	return {
// 		collectArr : function () {
// 			return collectArr;
// 		},
		
// 		src : function (item) {
// 			if(item) {
// 				console.log(item.flag)
// 				if(item.flag) {
// 					src="/shop/img/collect-hover.png";
// 				}else{
// 					src="/shop/img/collect.png";
// 				}
// 			}else{
// 				src="/shop/img/collect.png";
// 			}
	
			
// 			return src;
// 		},
		
// 		collectItemFn : function(item) {
// 			if(collectArr.indexOf(item) == -1){
// 				collectArr.push(item);
				
// 			}else{
// 				collectArr.splice(collectArr.indexOf(item),1);
// 			}
			
// 			return collectArr;
// 		},
		
		
		
// 	}
// }])
