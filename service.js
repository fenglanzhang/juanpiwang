app.service('cartServ', function () {
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
})