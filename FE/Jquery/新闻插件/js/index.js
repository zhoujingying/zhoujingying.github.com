jQuery.fn.extend({
	slideFocus: function() {
		var This = $(this);
		var sWidth = This.width();
		var len = This.find('ul li').length;
		var textSilde = $('.tuji_lunbo_text a');
		var index = 0;     	  //从第一张图开始      实时点击的索引
		var c = 0;            //小图片滑动后的索引（点击左右按钮滑动后）
		var d = c;            //点击小图片的索引
		var Timer;     
		var flag = true;      //点击小图片时判断是不是前三张
		
		//一次显示四张的总长，用于判断多久滑动
		var a = $("#tuji_wufeng_con ul li").outerWidth(true) * 4;
		
		//初始化=======给图片添加边框
		$("#tuji_wufeng_con ul li").css('border', '4px solid #fff');
		$("#tuji_wufeng_con ul li").eq(0).css('border', '4px solid #27d3e7');
		$(This).find('ul').css("width", sWidth * (len + 1)); //css确定ul的总长，len+1因为有辅助图
		
		//		左边按钮点击
		$(This).siblings('#tuji_left').add('#tuji_wufeng_left').click(function() {
		//if语句为第一张不能再向左
			if (index != 0) {       
                //大图片滑动
				index--;         
				run(index);
				
//				var b = $("#tuji_wufeng_con ul li").outerWidth(true) * (index + 1);
				
				c--;
				if(c < 0){
					c = 0;
				}
				$("#tuji_wufeng_con ul").stop(true, true).animate({
					marginLeft: -$("#tuji_wufeng_con ul li").outerWidth(true)*c  + "px"
				});
			}
		});
		$(This).siblings('#tuji_right').add('#tuji_wufeng_right').click(function() {
			if (index != len - 1) {
				index++;
				run(index);
				var b = $("#tuji_wufeng_con ul li").outerWidth(true) * (index + 1);
				if(c < 0){
					c = 0;
				}
				if (b > a) {
					c++;
					$("#tuji_wufeng_con ul").stop().animate({
						marginLeft: -$("#tuji_wufeng_con ul li").outerWidth(true) * c + "px"
					});
				}
			}
		});
		$('#tuji_wufeng_con ul li').click(function() {
				index = $(this).index();
				run(index);
				var b = $("#tuji_wufeng_con ul li").outerWidth(true) * (index + 1);
				c = index -2;
					if(b > a){
						d = index -2;
						$("#tuji_wufeng_con ul").stop().animate({
						marginLeft: -$("#tuji_wufeng_con ul li").outerWidth(true) * d + "px"
						});
						flag = false;
					}else if(b < a){
						if(flag == false){
							$("#tuji_wufeng_con ul").stop().animate({
							marginLeft: '0px'
							});
						}
					}
			})
			//		run动画
		function run(index) {
			var new_width = -index * sWidth;
			$(This).find('ul').stop().animate({
				'left': new_width
			}, 300); //将300改为0既是另外一种效果，非滑动
			textSilde.css('display', 'none').eq(index).css('display', 'block');
			$('.num').css('display', 'none');
			$('.num').eq(index).css('display', 'inline');
			$("#tuji_wufeng_con ul li").css('border', '4px solid #fff');
			$("#tuji_wufeng_con ul li").eq(index).css('border', '4px solid #27d3e7');
			//			var now_index = 0;
			if (index == len) {
				textSilde.css('display', 'none').eq(0).css('display', 'block');
				$('.num').eq(0).css('display', 'inline');
			}
		};
	}
});

$(function(){
	$('#img_con').slideFocus();
})
