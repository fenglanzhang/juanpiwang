app.controller('zhuceCtrl', ['$scope', 'loginUser','$state', function($scope, loginUser, $state) {
	//姓名验证
			$scope.f1 = function () {
				var str = document.getElementById("username").value;
				var reg = /^\w{6,16}$/;
				if(str == ""){
					document.getElementById("title1").innerHTML = "姓名不能为空";
					return false;
				}
				if(reg.test(str)==false) {
					document.getElementById("title1").innerHTML = "姓名为6-16位数字组成";
					return false;
				}
				document.getElementById("title1").innerHTML="√";
				return true;
			}
					//密码验证
			$scope.f2 = function(){
				var str = document.getElementById("pwd").value;
				var reg = /^[a-z_]\w{5,15}$/i;
				if(str==""){
					document.getElementById("title2").innerHTML="密码不能为空";
					return false;
				}
				if(reg.test(str)==false){
					document.getElementById("title2").innerHTML="密码不合法";
					return false;
				}
				document.getElementById("title2").innerHTML="√";
					return true;
			}

			$scope.zhuce = function () {
				
				if ($scope.f1() && $scope.f2()) {
					$scope.userObj = {userName : document.getElementById("username").value, password :document.getElementById("pwd").value}
					loginUser.addUser($scope.userObj)
					$state.go('login')
				}

			}
		
			
}]);