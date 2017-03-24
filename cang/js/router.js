		app.controller('ctrl',[function(){
			var self=this;
			self.a=window.location.hash;
			self.flag=true;
			self.changeflag=function(){
//				if(a=window.location.hash){
					console.log(window.location.hash);
					self.flag=!self.flag;
//				}
				
			}
		}])
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when("","cang");
	$urlRouterProvider.when("/cang","cang/jingxuan");
	 $stateProvider
	 			//一级路由直发仓
	 			.state('cang',{
					url:'/cang',
					templateUrl:'/cang/cang.html',
					consroller:'cangctrl',
				})
   				//一级路由搜索
   				.state('search',{
	 				url:'/search',
					templateUrl:'/go2.html',
				 })
				//一级路由商品详情
				.state('every_goods',{
					url:'/every_goods/:id',
					templateUrl:'/everygoods/goodinfo.html',
					controller:'goodsctrl'
				})
				//一级路由进入仓库
   				.state('goshop',{
	 				url:'/goshop',
					templateUrl:'/go1.html',
				 })
   				//一级路由进入生活仓
   				.state('gocang',{
	 				url:'/gocang',
					templateUrl:'/go2.html',
				 })
   				//一级路由进入我的订单
   				.state('alldd',{
	 				url:'/alldd',
					templateUrl:'/alldd/alldd.html',
				 })
				//二级路由精选
 				.state('cang.jingxuan',{
					url:'/jingxuan',
					templateUrl:'/cang/jingxuan.html',
				})
 				//二级路由日用
				.state('cang.riyong',{
					url:'/riyong',
					templateUrl:'/cang/riyong.html',
				})
				//二级路由清洁
				.state('cang.qingjie',{
					url:'/qingjie',
					templateUrl:'/cang/qingjie.html',
				})
				//二级路由餐厨
				.state('cang.canchu',{
					url:'/canchu',
					templateUrl:'/cang/canchu.html',
				})
				
	}])
//主文件控制器

//console.log(document.location);
//console.log(document.location.hash);
//console.log(window.location)
//var a=document.location.hash
//if(a/^(cang)/){
//	$("img[class='hide']").css("display:block");
//}
