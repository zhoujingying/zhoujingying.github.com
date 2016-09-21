/**
 * Created by zss on 2016/2/26.
 */
$(document).ready(function (){

    //首页顶部下拉
    selectBox($('.top-sel-deal'),$('.top-sel-deal ul'));

    $(".top-sel-deal").click(function () {
        if($(this).hasClass("sel_op")){$(this).removeClass("sel_op");}
        else{$(this).addClass("sel_op");}
    });

    $(document).click(function(){
        if($(".top-sel-deal ul").css('display')=='block') {
            $(".top-sel-deal").removeClass("sel_op");
        }
    });

    function selectBox(div1,div2){
        div1.click(function(event){
            event.stopPropagation();
            var Index = div1.index(this);

            if(div2.eq(Index).css('display')=='block'){
                div2.eq(Index).hide();
            }
            else{
                div2.hide();
                div2.eq(Index).show();
            }
            if(div2.eq(Index).css('display')=='block'){
                $(document).click(function(){
                    div2.hide();
                });
//                $('li a',div2).click(function(){
//                    var text=this.innerHTML;
//                    $(this).parent().parent().prev().text(text);
//                });
            }
        });
    }
    //tab切换
    tabChg($(".ya-fw-link .fw-link-tit li"),$(".fw-lk-ls"),"fw-lk-cur");

    function tabChg(tabLi,parentDiv,clazz) {
        var ld_tab = tabLi;
        var ld_con = parentDiv.children();
        ld_tab.hover(function(){
            ld_con.eq(ld_tab.index(this)).show().siblings().hide();
            $(this).addClass(clazz).siblings().removeClass(clazz);
        });
    }
    //图片放缩
    scrollImg($(".bz-lf-cy img"));
    scrollImg($(".kd-con-lf .kd-deal-pc img"));
    scrollImg($(".kd-rt-bk .kd-deal-pc img"));

    function scrollImg(img){
        var wth = img.width();
        var hei = img.height();
        var wth2 = wth + 10;
        var hei2 = hei + 10;

        img.hover(function(){
            $(this).stop().animate({height:hei2,width:wth2,left:"-5px",top:"-5px"},300);
        },function(){
            $(this).stop().animate({height:hei,width:wth,left:"0px",top:"0px"},300);
        });
    }
    //限制文本字数
    txtLimit($(".bz-rt-ls li p"),56,'...');
    txtLimit($(".bz-bl-sp"),80,'...');
    txtLimit($(".yw-ls-rt p"),80,'...');
    txtLimit($(".kd-deal-sp p span"),85,'...');
    txtLimit($("#Carousel4 .carousel-des-sp a span"),60,'...');

    function txtLimit(div,num,point) {
        for(var i=0;i<div.length;i++){
            var news_txt = div.eq(i).text();
            if(news_txt.length>=num){
                var  txt = news_txt.substr(0,num)+point;
                div.eq(i).text(txt);
            }
        }
    }
    //悬浮框
    if($(document).width()<=1480){
        $(".ya-fixed-box").css({'left':$(window).width()-60+'px','margin-left':0+'px'});
    }
    //回到顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() > 220) {
            $(".ya-fixed-box").css("display","block")
        }else{
            $(".ya-fixed-box").css("display","none")
        }
    });
    $(".ya-back-top").click(function () {
//        var scrollTop = $(document).scrollTop()/3;
        $('body,html').animate({ scrollTop: 0 }, 700);
        return false;
    });

    $(".ya-fixed-ew").mouseover(function () {
        $(".ew-pop-img").show();
    });
    $(".ya-fixed-ew").mouseout(function () {
        $(".ew-pop-img").hide();
    });
    //头条切换
    imgChg($('.ya-hl-bk'));
    imgChg($('#Carousel3 ul'));

    function imgChg(div) {
        var i=0;
        div.children().eq(0).show().siblings().hide();
        //这是点击切换
        var chg = div.parent().find('.ya-hl-chg a');
        chg.click(function(){
            div.children().eq(chg.index(this)).fadeIn(700).siblings().hide();
            $(this).addClass("ya-hl-cur").siblings().removeClass("ya-hl-cur");
            i=chg.index(this);

        });
        //这是循环播放\
        function b(){
            i++;
            if(i>1){i=0;};
            div.children().eq(i).fadeIn(700).siblings().hide();
            $(chg.eq(i)).addClass("ya-hl-cur").siblings().removeClass("ya-hl-cur");
        };
        //在这里设定 滚动的时间间隔
        var timer = setInterval(b,5000);
    }


});
//酷图hover
$(function(){
    var len = $("#Carousel6 .carousel-img").length;
    $("#Carousel6 .opt-pre").click(function(){
        var i=$("#Carousel6 .disblock").index();
        $(this).parent().find(".carousel-img").eq(i-1).addClass("disblock").siblings(".carousel-img").removeClass("disblock");
    });
    $("#Carousel6 .opt-next").click(function(){
        var i=$("#Carousel6 .disblock").index();
        if(i<len-1){
        $(this).parent().find(".carousel-img").eq(i+1).addClass("disblock").siblings(".carousel-img").removeClass("disblock");
        }else{$(this).parent().find(".carousel-img").eq(0).addClass("disblock").siblings(".carousel-img").removeClass("disblock");
        }
    });

    $("#Carousel6 .carousel-img ul li").css("height","310px");
    $("#Carousel6 .carousel-img ul .kt-pc-cur").css("margin-top","0px");
    $("#Carousel6 .carousel-img ul .kt-pc-cur img").css("height","310px");
    $("#Carousel6 .carousel-img ul li").hover(function(){

        $(this).animate({'margin-top':'0'},150).siblings().animate({'margin-top':'20px'},150);
        $(this).find("img").animate({'height':'310px'},170).parent().parent().siblings().find("img").animate({'height':'270px'},170);
        $(this).addClass("kt-pc-cur").siblings("li").removeClass("kt-pc-cur");
    });
});

window.onresize=function(){
//    fix_box
    if($(window).width()<=1480){
        $(".ya-fixed-box").css({'left':$(window).width()-60+'px','margin-left':0+'px'});
    }else{
        $(".ya-fixed-box").css({'left':50+'%','margin-left':614+'px'})
    }

};



$(function(){
	$('.yw_mNav a:first').addClass("yw_mNav_action");
	$('.yw_sF span:first').addClass('yw_sF_action');
	tab('.yw_mNav a');
	tab2('.yw_sF span');
	function tab(mouseNode){
		$(mouseNode).hover(function(){
			if($(this).parent('span').length == 0){
			$(mouseNode).removeClass("yw_mNav_action");
			$(this).addClass("yw_mNav_action");
			$(this).parent().siblings(".yw_mNav_content").css("display","none");            			$(this).parent().siblings(".yw_mNav_content").eq($(this).index()).css("display","block");
			}
		});
	}
	function tab2(mouseNode){
		$(mouseNode).hover(function(){
			$(mouseNode).removeClass("yw_sF_action");
			$(this).addClass("yw_sF_action");
			$(this).parent().siblings(".yw_sS_content").css("display","none");
            $(this).parent().siblings(".yw_sS_content").eq($(this).index()-1).css("display","block");
		})
	}
});

//专题  房产
window.onload = function(){
		if (!document.getElementsByClassName) {
		document.getElementsByClassName = function(className, element) {
			var children = (element || document).getElementsByTagName('*');
			var elements = new Array();
			for (var i = 0; i < children.length; i++) {
				var child = children[i];
				var classNames = child.className.split(' ');
				for (var j = 0; j < classNames.length; j++) {
					if (classNames[j] == className) {
						elements.push(child);
						break;
					}
				}
			}
			return elements;
		};

	}
		function hidden_char(node, show) {
		for (var i = 0; i < node.length; i++) {
			var node_str = node[i].innerHTML;
			if (node_str.length > show) {
				var show_str = node_str.substr(0, show) + "...";
				node[i].innerHTML = show_str;
			}
		}
	}
		var yw_p = document.getElementsByClassName('yw_pWords');
		var yw_sWords = document.getElementsByClassName('yw_sWords');
		var yw_nWords = document.getElementsByClassName('yw_nWords');
		var yw_s_p = document.getElementsByClassName('yw_s_p');
		var yw_side_p = document.getElementsByClassName('yw_side_p');
		var zt_top_p = document.getElementsByClassName('fa_top_p');
		hidden_char(zt_top_p, 63);
		hidden_char(yw_p, 110);
		hidden_char(yw_sWords,150);
		hidden_char(yw_nWords,55);
		hidden_char(yw_s_p,45);
		hidden_char(yw_side_p,25);
}

//专题  房产 雅女
$(function(){
	var navA = $('.zt_nav ul li a');
	navA.click(function(){
		navA.removeClass('zt_nav_action');
		$(this).addClass('zt_nav_action');
	});
	var navYn = $('.yn_nav_ul li a');
	navYn.click(function(){
		navYn.removeClass('yn_nav_action');
		$(this).addClass('yn_nav_action');
	});
	
	
//	0715新增	
	function wordsMargin(section,marginNum){
		for(i=0;i<$(section).length;i++){
			var imgWidth = $(section).find('img').width();
			if($(section).eq(i).find('img').length>0){
				$(section).eq(i).find('ul').css('margin-left',imgWidth+marginNum+'px')
			}
		}
	}
	wordsMargin('.zt_section',28);
	wordsMargin('.fc_main_section',21);
	
	$('.p_tnav a').hover(function(){	
		$(this).parent().find('a').removeClass('p_tnav_action');
		$(this).addClass('p_tnav_action');
		$(this).parent().parent().parent().find('.p_content').css('display','none');
		$(this).parent().parent().siblings('.p_content').eq($(this).index()).css('display','block');		
	});
	
//	旅游
	var navLy = $('.ly_nav_ul li a');
	navLy.click(function(){
		navLy.removeClass('ly_nav_action');
		$(this).addClass('ly_nav_action');
	});
	
	$('.lyTnavAdd a').hover(function(){	
		$(this).parent().find('a').removeClass('ly_tnav_action');
		$(this).addClass('ly_tnav_action');
		$(this).parent().parent().parent().find('.p_content').css('display','none');
		$(this).parent().parent().siblings('.p_content').eq($(this).index()).css('display','block');		
	});
	
	function lyNavHover(navP,className,displayBlock){
		$(navP).hover(function(){
			$(this).parent().find('p').removeClass(className);
			$(this).addClass(className);
			$(this).parent().siblings(displayBlock).css('display','none');
			$(displayBlock).eq($(this).index()).css('display','block');
			
		})
	}
	lyNavHover('.ly_xz_sn2 p','xz_p_action','.xz_left_content');
	lyNavHover('.ly_dt_sn2 p','xz_p_action','.yn_ss');
	
	$('.wz_right_a a').hover(function(){
		$(this).parent().find('a').removeClass('wz_a_action');
		$(this).addClass('wz_a_action');
		$(this).parent().siblings('ul').css('display','none');
		$(this).parent().siblings('ul').eq($(this).index()).css('display','block');
	})

   
});

