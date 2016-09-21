$(window).ready(function(){
	// 头部选项卡
	$(".home-navbar li").mouseenter(function(){
		$(this).addClass("checked").siblings(".checked").removeClass("checked");
		$(".home-tab-content").eq($(this).index()).addClass("checked").siblings(".checked").removeClass("checked");
	})

	// 首页选项卡
	$(".home-tab1-tab-title li").mouseenter(function(){
		$(this).addClass("checked").siblings(".checked").removeClass("checked");
		$(".home-tab1 .home-tab1-tab-content").eq($(this).index()).addClass("checked").siblings(".checked").removeClass("checked");
	})

	// 投资合川
	$(".home-tab3-scroll-prev").click(function(){
		var timer = null;
		var scroll_hei = $(".home-tab3-scroll-content a").outerHeight(true);
		$(".home-tab3-scroll-content a").animate({top:-scroll_hei},500);
		timer = setTimeout(function(){
			$(".home-tab3-scroll-content").append($(".home-tab3-scroll-content a").eq(0));
			$(".home-tab3-scroll-content a").stop().css("top","0px");
		},500)
	})
	$(".home-tab3-scroll-next").click(function(){
		var scroll_hei = $(".home-tab3-scroll-content a").outerHeight(true);
		$(".home-tab3-scroll-content a").css("top",-scroll_hei);
		$(".home-tab3-scroll-content")[0].insertBefore($(".home-tab3-scroll-content a")[$(".home-tab3-scroll-content a").length-1],$(".home-tab3-scroll-content a")[0]);
		$(".home-tab3-scroll-content a").stop().animate({top:0},500);
	})
	
	// 侧边栏定位
	$(".home-sidebar").css("left",$(window).width()/2+575);
	$(window).resize(function(){
		$(".home-sidebar").css("left",$(window).width()/2+575);
	})

	// 重点工作选项卡
	$(".home-middle-content-l1-nav").eq(0).find("li").mouseenter(function(){
		$(this).addClass("checked").siblings(".checked").removeClass("checked");
		$(".home-middle-content-l1-ul").eq($(this).index()).addClass("checked").siblings(".checked").removeClass("checked");
	})

	// 右边选项卡
	$(".home-middle-content-rt-title li").mouseenter(function(){
		$(this).addClass("checked").siblings(".checked").removeClass("checked");
		$(this).parent().parent().siblings(".home-tab1-tab-content").eq($(this).index()).addClass("checked").siblings(".checked").removeClass("checked");
	})

	// 政务服务
	$(".home-tab5-scroll-container ul").width($(".home-tab5-scroll-container li").outerWidth(true)*$(".home-tab5-scroll-container li").length);
	var li_wid = $(".home-tab5-scroll-container li").outerWidth(true);
	var li_index = 0;
	$(".home-tab5 .home-tab5-paged-next").click(function(){
		if (li_index>-2) {
			li_index--;
			$(".home-tab5-scroll-container ul").animate({"left":li_wid*li_index});
		};
	})
	$(".home-tab5 .home-tab5-paged-prev").click(function(){
		if (li_index<0) {
			li_index++;
			$(".home-tab5-scroll-container ul").animate({"left":li_wid*li_index});
		};
	})

	// 搜索栏
	$(".home-searchbar input").focus(function(){
		if ($(this).val()=="请输入关键字") {
			$(this).val("").css("color","#000");
		}
	}).blur(function(){
		if ($(this).val()=="") {
			$(this).val("请输入关键字").css("color","#ccc");
		}
	})

	// 友情链接
	$(".friendly-links-selection p").click(function(e){
		stopPropagation(e);
		if ($(this).next("ul").css("display")=="none") {
			$(".friendly-links-selection ul").slideUp();
			$(this).next("ul").slideDown();
			$(this).css("background","url(images/friendly-links-selection2.png) no-repeat 135px 13px")
		}else{
			$(this).next("ul").slideUp();
			$(this).css("background","url(images/friendly-links-selection.png) no-repeat 135px 13px")
		}
	})
	$(document).click(function(){
		$(".friendly-links-selection ul").slideUp();
	})

	// 首页轮播
	var swiperIndex1 = 0;
	var timer1 = setInterval(function(){
		iSwiper.call($(".home-tab1-swiper").eq(0),swiperIndex1);
		swiperIndex1 = (swiperIndex1+1)%($(".home-tab1-swiper a").length);
		$(".home-tab1-swiper-paged span").eq(swiperIndex1).addClass("checked").siblings(".checked").removeClass("checked");
	},2000)
	$(".home-tab1-swiper-paged span").mouseenter(function(){
		swiperIndex1 = $(this).parent().find("span").index(this);
		clearInterval(timer1);
		iSwiper.call($(".home-tab1-swiper").eq(0),swiperIndex1-1);
		$(".home-tab1-swiper-paged span").eq(swiperIndex1).addClass("checked").siblings(".checked").removeClass("checked");
		timer1 = setInterval(function(){
			iSwiper.call($(".home-tab1-swiper").eq(0),swiperIndex1);
			swiperIndex1 = (swiperIndex1+1)%($(".home-tab1-swiper a").length);
			$(".home-tab1-swiper-paged span").eq(swiperIndex1).addClass("checked").siblings(".checked").removeClass("checked");
		},2000)
	})

	// 合川概况轮播
	var swiperIndex2 = 0;
	var timer2 = setInterval(function(){
		iSwiper.call($(".home-tab2-swiper").eq(0),swiperIndex2);
		swiperIndex2 = (swiperIndex2+1)%($(".home-tab2-swiper a").length);
		$(".home-tab2-swiper-paged span").eq(swiperIndex2).addClass("checked").siblings(".checked").removeClass("checked");
	},2000)
	$(".home-tab2-swiper-paged span").mouseenter(function(){
		swiperIndex2 = $(this).parent().find("span").index(this);
		clearInterval(timer2);
		iSwiper.call($(".home-tab2-swiper").eq(0),swiperIndex2-1);
		$(".home-tab2-swiper-paged span").eq(swiperIndex2).addClass("checked").siblings(".checked").removeClass("checked");
		timer2 = setInterval(function(){
			iSwiper.call($(".home-tab2-swiper").eq(0),swiperIndex2);
			swiperIndex2 = (swiperIndex2+1)%($(".home-tab2-swiper a").length);
			$(".home-tab2-swiper-paged span").eq(swiperIndex2).addClass("checked").siblings(".checked").removeClass("checked");
		},2000)
	})

	// 下方图片轮播
	var swiperIndex3 = 0;
	var timer3 = setInterval(function(){
		iSwiper.call($(".home-bottom-swiper").eq(0),swiperIndex3);
		swiperIndex3 = (swiperIndex3+1)%($(".home-bottom-swiper a").length);
		$(".home-bottom-swiper-btns span").eq(swiperIndex3).addClass("checked").siblings(".checked").removeClass("checked");
	},2000)
	$(".home-bottom-swiper-btns span").mouseenter(function(){
		swiperIndex3 = $(this).parent().find("span").index(this);
		clearInterval(timer3);
		iSwiper.call($(".home-bottom-swiper").eq(0),swiperIndex3-1);
		$(".home-bottom-swiper-btns span").eq(swiperIndex3).addClass("checked").siblings(".checked").removeClass("checked");
		timer3 = setInterval(function(){
			iSwiper.call($(".home-bottom-swiper").eq(0),swiperIndex3);
			swiperIndex3 = (swiperIndex3+1)%($(".home-bottom-swiper a").length);
			$(".home-bottom-swiper-btns span").eq(swiperIndex3).addClass("checked").siblings(".checked").removeClass("checked");
		},2000)
	})
})


function stopPropagation(e) { 
	if (e.stopPropagation) {
		e.stopPropagation(); 
	}
	else{
		e.cancelBubble = true; 
	}
}


function iSwiper(swiperIndex){
	var nextEle = (swiperIndex+1)%($(this).find("a").length);
	$(this).find("a").eq(nextEle).fadeIn(500).siblings("a").fadeOut(500);
}


//=========================================合川概况============================================
$(function(){
	var optNavA = $('.optionNav1 a');
	var imgArr = ['images/hc_gk_6.png','images/hc_gk_7.png','images/hc_gk_8.png','images/hc_gk_9.png','images/hc_gk_10.png','images/hc_gk_11.png'];
	var imgArrAfter = ['images/hc_gk_06.png','images/hc_gk_07.png','images/hc_gk_08.png','images/hc_gk_09.png','images/hc_gk_010.png','images/hc_gk_011.png'];
	optNavA.hover(function(){
		for(i=0;i<optNavA.length;i++){
			optNavA.eq(i).css({
				'background':'#FFFFFF url('+imgArrAfter[i]+') left center no-repeat',
				'color':'#333'
			})
		}
		$('.opt1Content').css('display','none');
		$('.opt1Content').eq($(this).index()).css('display','block');
		$(this).css({
			'background':'#176dcd url('+imgArr[($(this).index())]+') left center no-repeat',
			'color':'#fff'
		})
	})
	
	
	function hidden_char(node, show) {
		for (var i = 0; i < $(node).length; i++) {
			var node_str = $(node).eq(i).html();
			if (node_str.length > show) {
				var show_str = node_str.substr(0, show) + "...";
				$(node).eq(i).html(show_str);
			}
		}
	}
	hidden_char('.gkSpan2', 69);
	hidden_char('.hcSection span',60);
	hidden_char('.tz-section-add div span',32);
	
	$('.hcImgNav a').hover(function(){
		$('.hcImgContent').css('display','none');
		$('.hcImgContent').eq($(this).index()-1).css('display','block');
		$('.hcImgNav a').removeClass('hcNavAction');
		$(this).addClass('hcNavAction');
	})
	
    //	合川轮播
	var slideIndex = 0;
	var aLength = $('.gkLeftContainer a').length;
	
	function starGoTo(){
		slideIndex++;
		if(slideIndex>=aLength){
			slideIndex = 0;
		}
		$('.gkLeftContainer a').eq(slideIndex).fadeIn(500).siblings('a').fadeOut(500);
	}
	var slideTime = setInterval(starGoTo,2000);

	$('.gkLeftContainer a').hover(function(){
		clearInterval(slideTime);
	},function(){
		slideTime = setInterval(starGoTo,2000);
	})
	
})
