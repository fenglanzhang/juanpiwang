app.factory('homeFac', ['$http', function ($http) {
	return {
		getHomeData1 : function () {
			return $http.get('/data/today.json')
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
		}
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