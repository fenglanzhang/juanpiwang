 
	 //配置路由
	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		//路由重定向
		$urlRouterProvider.when('', 'home');
		$urlRouterProvider.when('/home', 'home/home1')
		$urlRouterProvider.when('/search', '/search/jingxuan')
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
				controller : 'collectCtrl'
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
			.state('home.home4', {
				url:'/home4',
				templateUrl : '/home/home4.html'
			})
			.state('search.jingxuan',{
				url:'/jingxuan',
				templateUrl: '/search/jingxuan.html',
				controller: 'jingxuanCtrl'
			})
			.state('search.girls',{
				url:'/girls',
				templateUrl: '/search/girls.html',
				controller: 'jingxuanCtrl'
			})
			.state('search.boys',{
				url:'/boys',
				templateUrl: '/search/boys.html',
				controller: 'jingxuanCtrl'
			})
			

		
	}])