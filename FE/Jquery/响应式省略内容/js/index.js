jQuery.fn.extend({
	autoHidden: function(wordNum){
		var node = this;
		function hidden_char(node, show) {
		for (var i = 0; i < $(node).length; i++) {
			var node_str = $(node).eq(i).html();
			if (node_str.length > show) {
				var show_str = node_str.substr(0, show) + "...";
				$(node).eq(i).html(show_str);
			}
		}
	}
	
	
	for (var i = 0; i < $(node).length; i++) {
			var otext = $(node).eq(i).html();
	}
	
	$(window).on('resize scroll',function(){
		var owidth = $(window).width();
		var num = Math.floor(owidth/wordNum);               //14是字号数
		for (var i = 0; i < $(node).length; i++) {
			$(node).eq(i).html(otext);
	}
		hidden_char($(node),num);
	});
	
	var owidth = $(window).width();
		var num = Math.floor(owidth/wordNum);
		for (var i = 0; i < $(node).length; i++) {
			$(node).eq(i).html(otext);
	}
		hidden_char(node,num);
	}
		
	
});





$(function(){
	$('.op').autoHidden(14);
	
})
