var Texas = (function(){
	var calc_val = function(num){
		return parseInt(num/4)+1;
	}

	// 0：黑桃 1：红桃 2：梅花 3：方块
	var calc_type = function(num){
		return num%4;
	}

	var is_straight = function(arr){
		if(typeof arr == 'object'){
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
		return false;
		
	}

	var value_map = function(arr){
		var maps = {};
		if(typeof arr == 'object'){
			for(var i = 0; i < arr.length; i++){
				maps[arr[i]] = maps[arr[i]] == undefined ? 1 : maps[arr[i]]+1;
			}
		}
		return maps;
	}
	// level 
	// 0： 同花大顺（Royal Flush） 
	// 1： 同花顺（Straight Flush）
	// 2： 四条（Four of a Kind） 
	// 3： 葫芦（Fullhouse） 
	// 4：同花（Flush） 
	// 5：顺子（Straight） 
	// 6：三条（Three of a kind）
	// 7：两对（Two Pairs）
	// 8：一对（One Pair）
	// 9：高牌（high card）
	var card_transform = function(array){
		var origin_types = array.map(function(item){return calc_type(item)});
		var origin_values = array.map(function(item){return calc_val(item)});
		var types = origin_types.sort();
		var values = origin_values.sort(function(a,b){return a-b;});
		var level = -1;
		if(types[0] == types[types.length-1] && is_straight(values) && values[0] == 12){// level0
			level = 0 ;
		}else if(types[0] == types[types.length-1] && is_straight(values)){
			level = 1 ;
		}else if(values.length>=4 && Math.max(...Object.values(value_map(values))) == 4){
			level = 2 ;
		}else if(values.length==5 && Object.keys(value_map(values)).length == 2){
			level = 3 ;
		}else if(types[0] == types[types.length-1]){
			level = 4 ;
		}else if(is_straight(values)){
			level = 5 ;
		}else if(values.length>=3 && Math.max(...Object.values(value_map(values))) == 3){
			level = 6 ;
		}else if(values.length>=4 && Object.values(value_map(values)).indexOf(2) != Object.values(value_map(values)).lastIndexOf(2)){
			level = 7 ;
		}else if(values.length>=2 && Object.values(value_map(values)).indexOf(2) > -1){
			level = 8 ;
		}else{// 非同花
			level = 9 ;
		}
		return {
			types : origin_types,
			values : origin_values,
			level
		}
	}

	Object.prototype.getKeysByValue = function(){
		var obj = {};
		var entries = Object.entries(this);
		for (var entry in entries){
			if(!obj[entry.value])obj[entry.value] = [];
			obj[entry.value].push(entry.key);
		}
		return obj;
	}

	var compare = function(a,b){
		var card_a = card_transform(a);
		var card_b = card_transform(b);
		var max_a = Math.max(...card_a.values);
		var max_b = Math.max(...card_b.values);
		var result = false;
		if(card_a.level == card_b.level){
			var level = card_a.level;
			if(level == 0){
				result = 0;
			}else if(level == 1){
				result = max_a==max_b?0:max_a-max_b;
			}else if(level == 2){
				result = value_map(card_a.values).getKeysByValue(4)[0] > value_map(card_b.values).getKeysByValue(4)[0]
			}else if(level == 3 || level==6){
				var long_a = value_map(card_a.values).getKeysByValue(3)[0];
				var long_b = value_map(card_b.values).getKeysByValue(3)[0];
				var short_a = value_map(card_a.values).getKeysByValue(2)[0];
				var short_b = value_map(card_a.values).getKeysByValue(2)[0];
				result = long_a == long_b?short_a>short_b:long_a>long_b;
			}else if(level == 4){
				result = card_a.types[0]==card_b.types[0]?card_a.values.sort().pop() > card_b.values.sort().pop():card_a.types[0]<card_b.types[0];
			}else if(level == 5){
				var max_a = Math.max(...card_a.values);
				var max_b = Math.max(...card_b.values);
				var max_type_a = card_a.types[card_a.values.indexOf(max_a)];
				var max_type_b = card_b.types[card_b.values.indexOf(max_b)];
				result = max_a == max_b?max_a>max_b:max_type_a<max_type_b;
			}else if(level == 7){
				var pairs_a = value_map(card_a.values).getKeysByValue(2).sort();
				var pairs_b = value_map(card_a.values).getKeysByValue(2).sort();
				var single_a = value_map(card_a.values).getKeysByValue(2).sort();
				var single_b = value_map(card_a.values).getKeysByValue(2).sort();
				if(pairs_a[0] != pairs_b[0] && pairs_a[1] == pairs_b[1]){
					result = single_a==single_b?card_a.types[card_a.values.indexOf(single_a)]<card_b.types[card_b.values.indexOf(single_b)]:single_a>single_b;
				}else{
					result = pairs
				}
			}else if(level == 8){
			}else{
			}
		}else{
			result = card_a.level<card_b.level;
		}
		return result;
	}

	return {
		value_map,
		card_transform 
	}
})()