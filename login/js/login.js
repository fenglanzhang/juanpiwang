app.controller('loginCtrl',['$scope', '$state','$rootScope', 'loginUser', function ($scope, $state, $rootScope, loginUser) {
	$scope.login = function () {
		for (user of loginUser.userArr) {
			if ($scope.userName == user.userName && $scope.password == user.password) {
				$rootScope.isLogin = true;
				$state.go('cart')
				return
			}
		}
		alert('用户名密码错误')
	}
}])