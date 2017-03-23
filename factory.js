app.factory('homeFac', ['$http', function ($http) {
	return {
		getHomeData1 : function () {
			return $http.get('/data/global-03.json')
		},
		getHomeData2 : function () {
			return $http.get('/data/clothes.json')
		},
		getHomeData3 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getHomeData4 : function () {
			return $http.get('/data/global-baby.json')
		},
		getHomeData5 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getHomeData6 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getHomeData7 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getHomeData8 : function () {
			return $http.get('/data/livingHomeCookhouseGoodsData.json')
		},
		getLunbo : function () {
			return $http.get('/data/beautyData.json')
		},
		getLunbo1 : function () {
			return $http.get('/data/digitalData.json')
		},
		getLunbo2 : function () {
			return $http.get('/data/global-02.json')
		},
	}	
}])
	.factory('totalMoney', ['cartServ', function (cartServ) {
		return {
			allMoney : function () {
				var money = 0;
				cartServ.getGoods().forEach(function (item) {
					money += (Number(item.cprice)*item.count)
				})
				return money
			}
			
		}
	}])
	.factory('limitFac', ['$http', function ($http) {
		return {
			getLimitGoods : function () {
				return $http.get('/data/global-03.json')
			}
		}
	}])
	
	.factory('show', ['$state', function ($state) {
		return {
			showShop : function (item) {
				$state.go('shop', {id:JSON.stringify(item)});
			},
			
			showGoods : function (item) {
				$state.go('goods',{id: JSON.stringify(item)})
			}
		}
	}])