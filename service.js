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
  .service('judgeFlag', function () {
  	this.judge = function (arr) {
  		if (arr == []) {
  			console.log(1)
  			return false
  		}else{
  			console.log(2)
  			return true
  		}
  	}
  })
  
