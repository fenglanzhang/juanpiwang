app.controller('searchCtrl', ['$scope', 'searchFac', function($scope, searchFac) {
	var arr= document.querySelectorAll("a");
	for(var i=0; i<arr.length;i++){
		arr[i].onclick = function (){
			for(var j=0; j<arr.length;j++){
				arr[j].className = 'none';
			}
			this.className = 'bianse';
		}	
	}
	searchFac.getData1().then(function (data) {
		$scope.data = data.data.data
		console.log(data.data)
	})
	searchFac.getData2().then(function (data) {
		$scope.data2 = data.data.data
		console.log(data.data)
	})
	searchFac.getData3().then(function (data) {
		$scope.data3 = data.data.data
		console.log(data.data.data)
	})
	
}]);