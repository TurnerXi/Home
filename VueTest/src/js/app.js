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
});

Vue.component('switch-play-component',{
	props: {
		currentPlay : {
			type:Object,
			default:function(){
				return play_types[0];
			}
		},
		show_play_box: false,
		current_play_type : false
	},
	template:"#switch-play-template",
	methods : {
		switch_play:function(play_type){
			this.$emit('switch-play-type',play_type);
		},
		is_current_play_type : function(play_type){
			return this.current_play_type == play_type;
		}
	}
});

Vue.component('header-component', {
	data:function(){
		return {
			currentPlay : play_types[0],
			is_show_play : false,
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
  		},
  		switchPlayType : function(playType){
  			this.currentPlay = playType;
  			this.is_show_play = !this.is_show_play;
  		}
  	},
  	computed: {
	    currentPlayText: function () {
	      return lot_name+"-"+this.currentPlay.p_name.substring(0,2);
    	}
    }
});


Vue.component('open-time-component',{
	data : function(){
		var current_issue = data_2004.current;
		setInterval(function(){current_issue.accmulate_prize++},1000);
		return current_issue;
	},
	template : "#open_time_template"
});
var app = new Vue({
    el: '#selhm',
	data: {
    	show_nav:false
  	}
})

