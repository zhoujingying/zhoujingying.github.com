jQuery.fn.extend({

	slideFocus: function() {
		var This = $(this);
		var sWidth = This.width();
		var len = This.find('ul li').length;     
		var textSilde = $('.zbzt_text_slide a');
		var index = 0;            
		var Timer;

		$(This).siblings('.btn').find('span').eq(0).addClass('on'); 
		$(This).find('ul').append(This.find('ul li').first().clone(true));    

		
		$(This).find('ul').css("width", sWidth * (len+1)); 						
		$(This).parent().hover(function(ev) {
			clearInterval(Timer);
		}, function() {
			Timer = setInterval(function() {
				if (len == index) {             
					index = 0; 
					$(This).find('ul').css('left', 0); 
				}
				index++;
				run(index); 
			}, 5000);
			
		}).trigger("mouseleave"); 

		
		$(This).siblings('.btn').find('span').mouseover(function() {
			index = $(This).siblings('.btn').find('span').index(this);
			run(index);
		});
		
		//		run动画
		function run(index) {
			var new_width = -index * sWidth;
			$(This).find('ul').stop().animate({
				'left': new_width
			}, 300);                                 
			textSilde.css('display', 'none').eq(index).css('display', 'block');
			$(This).siblings('.btn').find('span').eq(index).addClass('on').siblings().removeClass('on');
			if (index == len) {
				$(This).siblings('.btn').find('span').eq(0).addClass('on').siblings().removeClass('on')
				textSilde.css('display', 'none').eq(0).css('display', 'block');
			}
		};
	}
});

jQuery.fn.extend({
	imgScroll: function() {
		var liThis = $("li", this);
		var flag = true;
		
		//初始大小
		var ulWidth = 0;
		for (var i = 0; i < liThis.size(); i++)
			ulWidth += liThis.eq(i).outerWidth(true); 

		//循环所需要的元素
		liThis.parent().css({
			width: (ulWidth * 2) + "px"
		});
		liThis.parent().append(liThis.clone()).append(liThis.clone()); //克隆li
		liThis = $("li", this);

		//滚动
		var liScroll = 0; //滚动的值
		function gotoLeft() {
			liScroll += 1; //以1递增滚动
			flag = true;
			if (liScroll > ulWidth) //当滚动的距离大于ulWidth
			{
				liScroll = 0;
			}
			liThis.parent().animate({
				left: -liScroll
			}, 0); //回到原位
		};
		function gotoRight() {
			liScroll -= 1; //以1递增滚动
			flag = false;
			var a = liThis.parent().position().left;
			if (a == 0) 
			{
				liScroll=ulWidth;
			}
			liThis.parent().animate({
				left: -liScroll
			}, 0); //回到原位
		};

		//开始
		var move = setInterval(function() {
			gotoLeft();
		}, 40); //40为速度
		liThis.parent().hover(function() {
			clearInterval(move);
		}, function() {
			clearInterval(move);
			if(flag == true)
			{
				move = setInterval(function() {
				gotoLeft();
				},40);
			}else if(flag == false){
				move = setInterval(function(){
					gotoRight();
				},40);
			}
			});	
		$('.zbzt_slide_left').click(function(){
		clearInterval(move);
			move = setInterval(function() {
				gotoLeft();
			}, 40);
		});
		$('.zbzt_slide_right').click(function(){
		clearInterval(move);
			move = setInterval(function() {
				gotoRight();
			}, 40);
		});
	}
});

$(function() {
	//		调用函数
	$('.zbzt_pic_slide').slideFocus();
	$(".zbzt_slide").imgScroll();
	
})
