$(function() {

	//	背景图片切换
	$.backstretch(["images/index_bg1.jpg"]);

	var c = setTimeout(function() {
		$("body").backstretch(["images/index_bg2.jpg", "images/index_bg3.jpg", "images/index_bg1.jpg"], {
			duration: 4000,
			fade: 1000
		});
	}, 4000);	


	//  视窗定位调节
	var wh=$(window).height();
	var footer=$('.footer_icon');
	var body=$('body');
	var middleBody=$('.middle_body');
	var shade=$('.shade');
	var topSelect=$('.top_select');
	if (wh < 620) {                          //最小高度
		footer.css('top', '85%');
		body.css('position', 'relative');
	}else if(wh >= 620&&wh<667){             //360
		middleBody.css('top','33%');
		footer.css('top', '85%');
		body.css('min-height','100%');
		shade.css('min-height','100%');
		body.css('position', 'static');
	}else if(wh >= 667&&wh<768){             //chrome
		middleBody.css('top','34%');
		body.css('min-height','100%');
		shade.css('min-height','100%');
		body.css('position', 'static');
	}else if(wh > 900) {                      //大屏
		topSelect.css('top','22%');
		middleBody.css('top','41%');
		footer.css('top', '75%');
		body.css('min-height','100%');
		shade.css('min-height','100%');
		body.css('position', 'static');
	}
	else{
		body.css('position', 'static');
	};

	$(window).on('resize scroll', function() {
		if ($(window).height() < 620) {      //最小高度
			footer.css('top', '85%');
			body.css('min-height','620px');
			shade.css('min-height','620px');
			body.css('position', 'relative');

		}else if($(window).height() > 900){  //大屏
			topSelect.css('top','22%');
			middleBody.css('top','41%');
			footer.css('top', '75%');
			body.css('min-height','100%');
			shade.css('min-height','100%');
			body.css('position', 'static');		
		}else {
			topSelect.css('top','18%');
			middleBody.css('top','34%');
			footer.css('top', '85%');
			body.css('min-height','100%');
			shade.css('min-height','100%');
			body.css('position', 'static');
		}
	});

	//   头部下拉
	$('.select_f').click(function() {
		$('.select_f').removeClass('dropAction');
		$(this).siblings().find('ul').slideUp();
		$(this).addClass('dropAction');
		$(this).children('cite').next('ul').slideToggle();

	});
	$('.select_f ul li a').click(function(event) {
		$(this).parent().parent().slideUp();
		event.stopPropagation();
	});
	
	//	搜索框
	$('.box_cancel').click(function(){
		$('.box_text').val("");
	});

	//	问查看办
	var a = ["'images/wen_bg.png'", "'images/cha_bg.png'", "'images/kan_bg.png'", "'images/ban_bg.png'"];

	$('.wckb li:first').addClass('wckb_action');
	$('.wckb li').hover(function() {
		$('.wckb li').removeClass('wckb_action');
		$(this).addClass('wckb_action');

		$('.wckb li a').css('background', 'url(images/wckb_bg.png) center no-repeat');
		$(this).children('a').css("background", "url(" + a[$(this).index()] + ") left center no-repeat")

		var wckbThis = $('.wckb_content').children().eq($(this).index());
		wckbThis.stop(true, true).fadeIn(400);
		$('.wckb_content').children().not(wckbThis).stop(true, true).fadeOut(300);

	});
	$('.wen_cha a,.kan a,.ban1 a').hover(function() {
		$(this).css({
			'box-shadow': '3px 3px 3px rgba(0, 0, 0, .3)'
		})
	}, function() {
		$(this).css({
			'box-shadow': 'none'
		})
	});


});