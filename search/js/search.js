app.controller('searchCtrl', ['$scope',function($scope) {
	var arr= document.querySelectorAll("a");
	for(var i=0; i<arr.length;i++){
		arr[i].onclick = function (){
			for(var j=0; j<arr.length;j++){
				arr[j].className = 'none';
			}
			
			this.className = 'bianse';
		}
		
		
		
	}
	
	
}]);