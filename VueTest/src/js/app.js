Vue.component('show-more-component', {
	props:{
		tools : {
			type : Array,
			default : function(){
				return [];
			}
		}
	},
	template: '#show-more-template',
	data: function () {
	    return {
	      show: false
	    }
	},
	methods: {
	    toolsEvent:function(key){
	      	this.$emit('tools-taped',key);
	      }
	},
  	mounted :function(){
	  	this.$nextTick(function(){
	  		var tar = this;
	  		document.addEventListener('click',function(e){
	  			if (!tar.$el.contains(e.target)) tar.show = false;
		    });
		});
   	}
})

Vue.component('header-component', {
	props: {currentPlay : {
		type:Object,
		default:function(){
			return {
				type : 1001,
    			name : "普通"
			}
		}
	}},
	data:function(){
		return {
			show_nav : false,
			tools : [
				{key:"header_explain",text:"玩法说明"},
				{key:"history",text:"历史走势"},
				{key:"choose_random",text:"多期机选"}
			]
		}
	},
  	template: '#header-template',
  	methods : {
  		toolsTaped : function(key){
			console.log(key);
  		}
  	}
})

var app = new Vue({
    el: '#selhm',
	data: {
    	currentPlay : {
    		type : 1001,
    		name : "普通"
    	},
    	show_nav:false
  	}
})

