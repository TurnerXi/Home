 module.exports = function(){
	// level
	// 0: 同花大顺（Royal Flush）
	// 1: 同花顺（Straight Flush）
	// 2: 四条（Four of a Kind）
	// 3: 葫芦（Fullhouse）
	// 4:同花（Flush）
	// 5:顺子（Straight）
	// 6:三条（Three of a kind）
	// 7:两对（Two Pairs）
	// 8:一对（One Pair）
	// 9:高牌（high card）
	var card_arr = [];
	var snums = {0:"2",1:"3",2:"4",3:"5",4:"6",5:"7",6:"8",7:"9",8:"10",9:"J",10:"Q",11:"K",12:"A"};
	var stypes = {0:"♠",1:"♥",2:"♣",3:"♦"};
	var levels = {0: '同花大顺（Royal Flush）' ,1: '同花顺（Straight Flush）',2: '四条（Four of a Kind） ',3: '葫芦（Fullhouse）',4:'同花（Flush）',5:'顺子（Straight）' ,6:'三条（Three of a kind）',7:'两对（Two Pairs）',8:'一对（One Pair）',9:'高牌（high card）'}
	var calc_val = function(num){
		return parseInt(num/4);
	}

	// 0:黑桃 1:红桃 2:梅花 3:方块
	var calc_type = function(num){
		return num%4;
	}

	// 将牌转换为花色数组,牌面数组和牌型
	var card_transform = function(array){
		var origin_types = array.map(function(item){return calc_type(item)});
		var origin_values = array.map(function(item){return calc_val(item)});
		var types = origin_types.sort();
		var values = origin_values.sort(function(a,b){return a-b;});
		var level = -1;
		if(types[0] == types[types.length-1] && values.isStraight() && values[0] == 12){// level0
			level = 0 ;
		}else if(types[0] == types[types.length-1] && values.isStraight()){
			level = 1 ;
		}else if(values.length>=4 && Math.max(...Object.values(values.valueMap())) == 4){
			level = 2 ;
		}else if(values.length==5 && Object.keys(values.valueMap()).length == 2){
			level = 3 ;
		}else if(types[0] == types[types.length-1]){
			level = 4 ;
		}else if(values.isStraight()){
			level = 5 ;
		}else if(values.length>=3 && Math.max(...Object.values(values.valueMap())) == 3){
			level = 6 ;
		}else if(values.length>=4 && Object.values(values.valueMap()).indexOf(2) != Object.values(values.valueMap()).lastIndexOf(2)){
			level = 7 ;
		}else if(values.length>=2 && Object.values(values.valueMap()).indexOf(2) > -1){
			level = 8 ;
		}else{// 非同花
			level = 9 ;
		}
		return {
			types : origin_types,
			values : origin_values,
			level,
			level_text: levels[level]
		}
	}

	// 张数相同的排由多到少比较牌的大小，优先比较张数多的牌的大小
	var compare_pairs = function(map_a,map_b){
		var a = map_a.reverseMap();
		var b = map_b.reverseMap();
		var card_nums = Object.keys(a).sort(function(a,b){return b-a;});
		for(var i=0;i<card_nums.length;i++){
			var item = card_nums[i];
			var keys_a = a[item].sort(function(a,b){return b-a;});
			var keys_b = b[item].sort(function(a,b){return b-a;});
			if (keys_a.join() != keys_b.join()){
				return keys_a.compareTo(keys_b);
			}
		}
		return 0;
	}

	Array.prototype.compareTo = function(arr){
		var self = this;
		for (var i = 0; i < self.length; i++) {
			if(self[i] != arr[i] && typeof +self[i] == 'number' && typeof +arr[i] == 'number'){
				return +self[i]>+arr[i]?1:-1;
			}
		}
		return 0;
	}

	// 比较两组牌的大小
	var compare = function(a,b){
		var card_a = card_transform(a);
		var card_b = card_transform(b);
		var map_a = card_a.values.valueMap();
		var map_b = card_b.values.valueMap();

		var result = false;
		if(card_a.level == card_b.level ){
			result = compare_pairs(map_a,map_b);
		}else{
			result = card_a.level<card_b.level?1:-1;
		}
		return result;
	}

	var get_result = function(all_cards){
		var orgin_arr = all_cards.slice();
		Array.prototype.sort.call(all_cards,compare).reverse()[0];
		return orgin_arr.map(function(item,idx){
			var result = {};
			Object.assign(result,card_transform(item));
			result['rank'] = all_cards.indexOf(item);
			return result;
		})
	}

	var show_card = function(){
		return (function(){
			var card = parseInt(Math.random()*52);
			if(card_arr.length >= 52){
				return ;
			}else if(card_arr.indexOf(card)>-1){
				return show_card();
			}else{
				card_arr.push(card);
				return trans_card(card);
			}
		})();
	}

	var trans_card = function(card){
		return {
			num : card,
			type : calc_type(card),
			stype : stypes[calc_type(card)],
			snum : snums[calc_val(card)],
		}
	}

	var get_max = function(nums){
		var all = nums.cnm(Math.min(5,nums.length),nums.length);
		var best = Array.prototype.sort.call(all,compare).reverse()[0];
		best = best.sort(function(a,b){return (+b)-(+a);});
		var res = [];
		for(var i=0;i<best.length;i++){
			res.push(trans_card(best[i]));
		}
		return res;
	}

	// 数组排列组合
	Array.prototype.cnm = function(n,m){
		var self = this;
		var all = [];
		var units = comb(n,m,[]);
		for(var i=0;i<units.length;i++){
			var arr = [];
			var unit_arr = units[i].split("");
			for(var j=0;j<unit_arr.length;j++){
				if(unit_arr[j] == '1'){
					arr.push(self[j]);
				}
			}
			all.push(arr);
		}
		return all;
	}

	var comb = function(n,m,arr,str){
		if(str == undefined){
		    var i = 0 ,str = "";
		    while(i++<n){str += '1'}
		    while(i++<m+1){str += '0'}
		}
		arr.push(str);
	    if(str.indexOf('10')>-1){
	        var index = str.indexOf('10');
	        str = str.replace('10','01');
	        var sub = str.substr(0,index);
	        var sortsub = sub.split("").sort().reverse().join("")
	        if(sub != sortsub){
	            str = str.replace(sub,sub.split("").sort().reverse().join(""));
	        }
	        return comb(n,m,arr,str);
	    }
	    return arr;
	}
	// 判断数组是否连续
	Array.prototype.isStraight = function(){
		var arr = this;
		var _temp = arr[0];
		for(var i = 1; i < arr.length; i++){
			if(arr[i]-_temp != 1){
				return false;
			}else{
				_temp = arr[i];
			}
		}
		return true;
	}

	// 将键值互换，值为原对象相同值的键的数组
	Object.prototype.reverseMap = function(){
		var obj = {};
		var self = this;
		for (var key in self){
			if(typeof self[key] != 'function'){
				if(!obj[self[key]])obj[self[key]] = [];
				obj[self[key]].push(key);
			}
		}
		return obj;
	}

	// 将数组转换为对象，键为源数组不同的值，值为相同键值的个数
	Array.prototype.valueMap = function(){
		var arr = this;
		var maps = {};
		if(typeof arr == 'object'){
			for(var i = 0; i < arr.length; i++){
				maps[arr[i]] = maps[arr[i]] == undefined ? 1 : maps[arr[i]]+1;
			}
		}
		return maps;
	}

	return {
		card_transform,
		compare,
		show_card,
		get_max,
		get_result
	}
}
