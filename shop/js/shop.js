app.controller('shopCtrl', ['$http', '$scope', '$stateParams','$state','collectServ',function ($http, $scope, $stateParams, $state,collectServ) {
	console.log(collectServ.cnt());
	console.log(collectServ.collectArr());
	console.log(collectServ.src());
	
	collectServ.Img();
	$scope.src = collectServ.src();
	
	var itemStr = $stateParams.id;
	$scope.item = JSON.parse(itemStr);
	$scope.showGoods = function () {
		$state.go('goods', {id: JSON.stringify(this.items)})
	}
	
	$scope.collectFn = function () {
		
		var collectItem = this.item;
		
		collectServ.collectItemFn(collectItem);
		collectServ.Img();
		$scope.src = collectServ.src();
		
		console.log(collectServ.cnt());
		console.log(collectServ.collectArr());
		console.log(collectServ.src());
		
	}
	
}])

app.factory('collectServ',[ function () {
	var Img = document.querySelector(".Img");
	var collectArr = [];
	var cnt = 0;
	return {
		collectArr : function () {
			return collectArr;
		},
		cnt : function () {
			return cnt;
		},
		Img : function () {
			return Img;
		},
		src : function () {
			if(cnt==0){
				src="/shop/img/collect.png";
				
			}else{
				src="/shop/img/collect-hover.png";
			}
			
			return src;
		},
		collectItemFn : function(item) {
			if(cnt==1){
				collectArr.splice(collectArr.indexOf(item),1);
				cnt = 0;
				
			}else{
				cnt = 1;
				collectArr.push(item);
			}
			
			return collectArr;
		}
	}
}])
