//新闻资讯
jQuery.fn.extend({
	imgScroll: function() {
		var liThis = $("li", this);
		var ulWidth = 0;
		for (var i = 0; i < liThis.size(); i++)
			{ulWidth += liThis.eq(i).outerWidth(true);}
		liThis.parent().css({
			width: (ulWidth * 2) + "px"
		});
		liThis.parent().append(liThis.clone());
		liThis = $("li", this);
		var liScroll = 0;
		function goto() {
			liScroll += 1;
			if (liScroll > ulWidth)
			{
				liScroll = 0;
			}
			liThis.parent().animate({
				left: -liScroll
			}, 0);
		};
		var move = setInterval(function() {
			goto();
		}, 40);
		liThis.parent().hover(function() {
			clearInterval(move);
		}, function() {
			clearInterval(move);
			move = setInterval(function() {
				goto();
			}, 40);
		})
	}
});




$(document).ready(function(){
	// 首页-搜索框下拉
	$(".top-links-lf p").click(function(){
        $(".top-links-lf ul").slideToggle();
    });
    $(".top-links-lf ul li").click(function(){
        $(".top-links-lf ul").slideUp(0);
        $(".top-links-lf p").text($(this).text());
    });
    $(".top-links-lf").attr('tabindex',1);
    $(".top-links-lf").blur(function(){
        $(".top-links-lf ul").slideUp(0);
    });
    // 首页导航hover效果
    homeHover($(".topbanerr li"),"topbanact");
    //首页轮播
	var tSwiperIndex = 1;
	var SwipermyTimer = setInterval(function(){
		iSwiper(tSwiperIndex);
		tSwiperIndex++;
		if (tSwiperIndex > 2) {
			tSwiperIndex = 0;
		}
	},4000)

	$(".swiper-buttons li").click(function(){
		var tSwiperIndex = $(".swiper-buttons li").index(this);
		iSwiper(tSwiperIndex);
		clearInterval(SwipermyTimer);
		SwipermyTimer = setInterval(function(){
			tSwiperIndex++;
			if (tSwiperIndex>2) {
				tSwiperIndex = 0;
			}
			iSwiper(tSwiperIndex);
		},4000)
	});
	//首页-新闻资讯详细内容的字数限制
	hidden_char($(".main2c .main2cr span"),78);
	
	//=========================================概览========================================
	$('.fenye a').click(function(){
		$('.fenye a').removeClass('pageAction');
		$(this).addClass('pageAction');
	})
	
	//=======================================新闻资讯========================================
	$(".xwslide").imgScroll();
	
	$('.midA a').hover(function(){
		$('.midA a').removeClass('midAction');
		$(this).addClass('midAction');
		$('.xwmContent').css('display','none');
		$('.xwmContent').eq($(this).index()).css('display','block');
	})
});
function homeHover(nav_li,active){
	var index;
	for(var i=0;i<6;i++){
		var li_cur = nav_li.eq(i);
		if(li_cur.hasClass(active)){
			index = i;
		}
	}
	nav_li.mouseover(function(){
		nav_li.removeClass(active);
		$(this).addClass(active);
	});
	nav_li.mouseout(function(){
		nav_li.removeClass(active);
		nav_li.eq(index).addClass(active);
	});
}
//轮播
function iSwiper(target){
	var aIndex = target;
	$(".swiper-buttons li:eq("+aIndex+")").addClass("checked").siblings("li").removeClass("checked");
	$(".swiper-container .pic-link").animate({
		opacity:"0"
	},300);
	$(".swiper-container .pic-link:eq("+aIndex+")").animate({
		opacity:"1"
	},500);
}
//多行字数限制
function hidden_char(node,show){
	for(var i=0;i<node.length;i++){
		var node_str = node[i].innerHTML;
		if(node_str.length>show){
			var show_str = node_str.substr(0,show)+"...";
			node[i].innerHTML = show_str;
		}
	}
}