app.controller('xiangqingCtrl', ['$scope', '$http','cartServ', '$state',function ($scope,$http,cartServ,$state){
	$scope.name = 'dljlfj';
	$http.get('./data/global-baby.json').success(function(data){
		$scope.data = data.list;
		console.log(data.list);
	})
	//点击按钮获取当前数据
//	$scope.addGoodd = function () {
//		console.log(this.item); 
//		cartServ.addGoods(this.item);
//		console.log(cartServ.addGoods(this.item));
//	}
	//获取当前商品的详情
	
	$scope.showDetial = function () {
		console.log(this.item);
		//id接收
		$state.go('goods',{id:JSON.stringify(this.item)});
		
		
		
	}
	
	
	
}]);