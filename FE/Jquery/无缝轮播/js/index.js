jQuery.fn.extend({
	slideFocus: function() {
		var This = $(this);
		var sWidth = This.width();
		var len = This.find('ul li').length;     //因为是先声明再克隆的，所以length=4
		var textSilde = $('.text_slide a');
		var index = 0;            //从第一张图开始
		var Timer;

		$(This).siblings('.btn').find('span').eq(0).addClass('on'); //第一个span的默认样式
		$(This).find('ul').append(This.find('ul li:first').clone(true));    //克隆第一张作为辅助图

		//		slide鼠标事件，trigger自动触发mouseleave
		$(This).find('ul').css("width", sWidth * (len+1)); 						//css确定ul的总长，len+1因为有辅助图
		$(This).parent().hover(function(ev) {
			clearInterval(Timer);
		}, function() {
			Timer = setInterval(function() {
				if (len == index) {             //因为是克隆前的length，所以index不用加1
					index = 0; //辅助图滑动后，ul返回第一张
					$(This).find('ul').css('left', 0); //用CSS的方式返回
				}
				index++;
				run(index); //再次开始动画
			}, 2000);
			
		}).trigger("mouseleave"); //自动触发

		//		span的鼠标hover事件
		$(This).siblings('.btn').find('span').mouseover(function() {
			index = $(This).siblings('.btn').find('span').index(this);
			run(index);
		});
		
		$(This).find('.leftImg').click(function(){
			if (index == 0) {
					index = len;
					$(This).find('ul').css('left', -index * sWidth); //用CSS的方式返回
				}
			index--;
			run(index);
		});
		
		$(This).find('.rightImg').click(function(){
			if (len == index) {
					index = 0; //辅助图滑动后，ul返回第一张
					$(This).find('ul').css('left', 0); //用CSS的方式返回
				}
				index++;
				run(index); //再次开始动画
		});
		//		run动画
		function run(index) {
			var new_width = -index * sWidth;
			$(This).find('ul').stop().animate({
				'left': new_width
			}, 300);                                 //将300改为0既是另外一种效果，非滑动
			textSilde.css('display', 'none').eq(index).css('display', 'block');
			$(This).siblings('.btn').find('span').eq(index).addClass('on').siblings().removeClass('on');
			if (index == len) {
				$(This).siblings('.btn').find('span').eq(0).addClass('on').siblings().removeClass('on')
				textSilde.css('display', 'none').eq(0).css('display', 'block');
			}
		};
	}
});
$(function() {
	//		调用函数
	$('.pic_slide').slideFocus();
})