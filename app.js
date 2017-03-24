 	
	 //配置路由
	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		
		//路由重定向
		$urlRouterProvider.when('', 'animation');
		$urlRouterProvider.when('/home', 'home/home1')

		$urlRouterProvider.when('/shopCollect', 'shopCollect/shopCollectFst')

		$urlRouterProvider.when('/search', 'search/jingxuan')

		$urlRouterProvider.when("/cang","cang/jingxuan");
		// //配置相关路由
		$stateProvider
			.state('home', {
				url : '/home',
				templateUrl : '/home/home.html',
				controller : 'homeCtrl'
			})
			.state('shopCollect', {
				url : '/shopCollect',
				templateUrl : '/shopCollect/shopCollect.html',
				controller : 'collectCtrl as ctrl'
			})
			.state('cang', {
				url : '/cang',
				templateUrl : '/cang/cang.html',
				controller : 'cangCtrl'
			})
			.state('global', {
				url : '/global',
				templateUrl : '/global/global.html',
				controller:'globalCtrl'
			})
			.state('cart', {
				url : '/cart',
				templateUrl : '/cart/cart.html',
				controller:'cartCtrl'
			})
			.state('mine', {
				url : '/mine',
				templateUrl : '/mine/mine.html'
			})
			.state('shop', {
				url :'/shop:id',
				templateUrl:'/shop/shop.html',
				controller:'shopCtrl'
			})
			.state('git', {
				url:'/git',
				templateUrl : '/git/git.html',
				controller : 'gitCtrl'
			})
			.state('goods', {
				url : '/goods:id',
				templateUrl : '/goods/goods.html',
				controller:'goodsCtrl'
			})
			.state('search', {
				url : '/search',
				templateUrl:'/search/search.html',
				controller: 'searchCtrl'
			})
			.state('order', {
				url : '/order',
				templateUrl : '/order/order.html'
			})
			.state('limit', {
				url : '/limit',
				templateUrl : '/limit/limit.html',
				controller :　'limitCtrl'
			})
			.state('animation', {
				url : '/animation',
				templateUrl : '/animation/animation.html',
				controller : 'animationCtrl'
			})
			.state('login', {
				url : '/login',
				templateUrl : '/login/login.html',
				controller : 'loginCtrl'
			})

			//配置2级路由
			.state('home.home1', {
				url:'/home1',
				templateUrl : '/home/home1.html'
			})
			.state('home.home2', {
				url:'/home2',
				templateUrl : '/home/home2.html'
			})
			.state('home.home3', {
				url:'/home3',
				templateUrl : '/home/home3.html'
			})

			// 直发仓二级路由
			.state('cang.jingxuan',{
					url:'/jingxuan',
					templateUrl:'/cang/jingxuan.html'
			})
			.state('cang.riyong',{
				url:'/riyong',
				templateUrl:'/cang/riyong.html'
			})
			.state('cang.qingjie',{
				url:'/qingjie',
				templateUrl:'/cang/qingjie.html',
			})
			.state('cang.canchu',{
				url:'/canchu',
				templateUrl:'/cang/canchu.html',
			})
// 
			.state('shopCollect.shopCollectFst', {
				url : '/shopCollectFst',
				templateUrl : '/shopCollect/shopCollectFst.html',
				controller : "collectFstCtrl"
			})
			.state('shopCollect.shopCollectScd', {
				url : '/shopCollectScd',
				templateUrl : '/shopCollect/shopCollectScd.html',
				controller : "collectScdCtrl"
			})

			.state('home.home4', {
				url:'/home4',
				templateUrl : '/home/home4.html'
			})
			.state('search.jingxuan',{
				url:'/jingxuan',
				templateUrl: '/search/jingxuan.html'
				// controller: 'jingxuanCtrl'
			})
			.state('search.girls',{
				url:'/girls',
				templateUrl: '/search/girls.html',
			})
			.state('search.boys',{
				url:'/boys',
				templateUrl: '/search/boys.html'
			})

	}])
	.run(['$window', '$rootScope', function ($window, $rootScope) {
		$rootScope.$on('$locationChangeSuccess', function () {
			if(($window.location.href.indexOf('home')!= -1) || ($window.location.href.indexOf('cang')!= -1) || ($window.location.href.indexOf('global')!= -1) || ($window.location.href.indexOf('cart')!= -1) || ($window.location.href.indexOf('mine')!= -1)) {
				$rootScope.rootIsShow = true
			}else{
				$rootScope.rootIsShow = false;
			}
		})
	}])