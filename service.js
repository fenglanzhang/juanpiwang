app.service('cartServ', function ($rootScope) {
	var arr = [];
	
	this.addGoods = function (item) {
		var flag = false
		arr.forEach(function (good, i) {
			if (item.goods_id == good.goods_id) {
				item.count += 1
				flag = true
				return 
			}
		})
		if (!flag) {
			item.count = 1;
			arr.push(item)
		}
	}
	this.getGoods = function () {
		return arr 
	}
	this.removeGoods = function (item) {
		if(confirm('是否取消该商品')){
			arr.splice(arr.indexOf(item), 1)
		}
	}
})
  .service('lunbo', function () {
  	this.lunbo = function () {
  		var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:1000,
	    observer:true,
	    autoplayDisableOnInteraction:false,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	  })  
  	}
  })
  .service('loginUser', function () {
  	this.userArr = [
  		{userName : 'lzx', password : '123456'},
  		{userName : 'zyx', password : '123456'},
  		{userName : 'zfl', password : '123456'},
  		{userName : 'wxy', password : '123456'}
  	]
  	this.addUser = function (userObj) {
  		var flag = false;
  		for (user of this.userArr) {
  			if (user.userName == userObj.userName) {
  				flag = true;
  				return alert('用户名已存在')
  			}
  		}
  		if(!flag) {
  			userArr.push(userObj)
  			return alert('注册成功')
  		} 
  	}
  })
  
