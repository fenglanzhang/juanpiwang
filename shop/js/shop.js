app.controller('shopCtrl', ['$http', '$scope', '$stateParams','$state','collectServ',function ($http, $scope, $stateParams, $state,collectServ) {
	//collectServ.Img().src="/shop/img/collect.png";
	//collectServ.cnt()=1;
	var itemStr = $stateParams.id;
	$scope.item = JSON.parse(itemStr);
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
		collectItemFn : function(item) {
			if(cnt==1){
				Img.src="/shop/img/collect.png";
				collectArr.splice(collectArr.indexOf(item),1);
				cnt = 0;
				
			}else{
				Img.src="/shop/img/collect-hover.png";
				cnt = 1;
				collectArr.push(item);
			}
			
			return collectArr;
		}
	}
}])
