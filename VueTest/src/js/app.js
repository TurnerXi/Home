Vue.component('show-more-component', {
	template: '#show-more-template',
	data: function () {
	    return {
	      show: false
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

Vue.component('header-compontent', {
  template: '#header-template'
})

var app = new Vue({
    el: '#selhm',
	data: {
    	play: {
    		type : 1001,
    		name : "普通"
    	},
    	show_nav:false
  	}
})



