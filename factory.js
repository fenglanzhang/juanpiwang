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
		}
	}
}])