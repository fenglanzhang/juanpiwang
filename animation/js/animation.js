app.controller('animationCtrl', ['$timeout', '$state', function ($timeout, $state) {
	$timeout(function () {
		$state.go('home')
	}, 3000)
}])