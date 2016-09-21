$(document).ready(function(){
	// 首页-top-下拉链接
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
    
    //	                ========================= 概览 =========================
	$('.sSide ul li a').click(function(){
		$('.sSide ul li a').removeClass('sSide_red');
		$(this).addClass('sSide_red');
		$('.sMain').css('display','none');
		$('.sMain').eq($(this).parent().index()).css('display','block');
	})
	

	function hidden_char(node, show) {
		for (var i = 0; i < node.length; i++) {
			var node_str = node[i].innerHTML;
			if (node_str.length > show) {
				var show_str = node_str.substr(0, show) + "...";
				node[i].innerHTML = show_str;
			}
		}
	}
	var zwSpan = $('.dwContent span');
	hidden_char(zwSpan,90);
	
	$('.sMainPage a').click(function(){
		$('.sMainPage a').removeClass('pActiveRed');
		$(this).addClass('pActiveRed');
	})
	
	
	
//=========================================================公共服务
		
	$('.fwNavRed a').click(function(){
		$('.fwNavRed a').removeClass('fwAction');
		$(this).addClass('fwAction');
		$('.fwUl').css('display','none');
		$('.fwUl').eq($(this).index()).css('display','block');
	})

//================================================人群服务=======================================
	
	
	
	
	
})

//	========================================================细览==================================
window.onload = function(){
	var topHeight = $('.sTopTitle').outerHeight(true);
var contentHeight = $('.sTopContent').outerHeight(true);
var xlHeight = topHeight+contentHeight+25;
$('.newContainer').css('height',xlHeight+'px');
}




