app.controller('loginCtrl',['$scope', '$state','$rootScope', function ($scope, $state, $rootScope) {
	$scope.login = function () {
		if ($scope.userName == 'goodboy' || $scope.password == 'goodgirl') {
			$rootScope.isLogin = true;
			$state.go('cart')
		}else{
			alert('登录错误')
		}
	}
}])