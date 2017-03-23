app.controller('collectScdCtrl', ['$scope', '$http', '$stateParams','collectServ', function ($scope,$http,$stateParams,collectServ) {
	$scope.data = collectServ.collectArr();
	console.log($scope.data);
}])