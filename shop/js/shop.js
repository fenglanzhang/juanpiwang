app.controller('shopCtrl', ['$http', '$scope', '$stateParams','$state','collectServ', '$interval',function ($http, $scope, $stateParams, $state,collectServ, $interval) {
	//collectServ.Img().src="/shop/img/collect.png";
	//collectServ.cnt()=1;
	var itemStr = $stateParams.id;
	$scope.item = JSON.parse(itemStr);
	$scope.onlyTime = $scope.item.end_time - $scope.item.start_time
	function addZero (num) {
		return num > 10 ? num : '0' + num
	}
	function dateFormat () {
		return addZero(parseInt($scope.onlyTime/100/60/60)) + '时' + addZero(parseInt($scope.onlyTime/(100*60)%60)) + '分' + parseInt($scope.onlyTime/100 %60) + '秒'
	}
	$scope.time = dateFormat($scope.onlyTime)
	$interval(function () {
		$scope.onlyTime -= 100
		$scope.time = dateFormat($scope.onlyTime)
	}, 1000)
	console.log($scope.onlyTime/100%60)
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
	$scope.changeAttr = function (attr) {
		$scope.attribute = attr
	}
	$scope.filterAttr = function (num) {
		$scope.num = num
		$scope.attribute = 'oprice'
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
