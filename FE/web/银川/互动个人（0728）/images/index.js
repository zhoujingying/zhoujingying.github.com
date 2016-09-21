jQuery.fn.extend({
	  pullDown:function(){
	  		var flag = true;
    		$(this).click(function(){
    			if(flag == true){
				$(this).parent().siblings().css('display','none');
				$(this).attr('src','images/xjcl1.png');
				flag = false;
			}else{
				$(this).parent().siblings().css('display','block');
				$(this).attr('src','images/xjcl.png');
				flag = true;
			}
    	});
    }
});


$(function(){
    //所有信件下拉
    selectBox($('.selectDiv'),$('.selectDiv ul'));

    $(".selectDiv").click(function () {
        if($(this).hasClass("sel_op")){$(this).removeClass("sel_op");}
        else{$(".selectDiv").removeClass("sel_op");$(this).addClass("sel_op");}
    });

    $(document).click(function(){
        if($(".selectDiv ul").css('display')=='block') {
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
                    div1.removeClass("sel_op");
                });
                $('li a',div2).click(function(){
                    var text=this.innerHTML;
                    $(this).parent().parent().prev().text(text);
                });
            }
        });
    }
    //所有信件tab切换
    tabChg($(".sy-xj-tit ul li"),$(".xj-cx-con"),"sy-xj-cur");

    function tabChg(tabLi,parentDiv,clazz) {
        var ld_tab = tabLi;
        var ld_con = parentDiv.children();
        ld_tab.hover(function(){
            ld_con.eq(ld_tab.index(this)).show().siblings().hide();
            $(this).addClass(clazz).siblings().removeClass(clazz);
        });
    }
//	遮罩和弹窗
	function shade(swap,mask,cancelBtn){
		$(swap).css('display','block');              
		$(mask).css('display','block');
		setPosition(swap,mask);
	}
	function setPosition(swap,mask){
		$(swap).css('height',$('body').height()+90);     
		$(mask).css('left' , ($(window).width() - $(mask).outerWidth())/2 );
		$(mask).css('top' , ($(window).height() - $(mask).outerHeight())/2 );
	}
	
	shade('.swap','.xzMask');
//	shade('.delectClick','.delectMask');
	
	$(window).on('resize scroll',function(){
		setPosition('.swap','.xzMask');
		setPosition('.swapClick','.xjclMask');
		setPosition('.delectClick','.delectMask');
	});
	
//	写信须知弹窗
	var index = 5;
	var time = setInterval(function(){
		index--;
		if(index <= 0){
			$('.swap').css('display','none');              
			$('.xzMask').css('display','none');
			clearInterval(time);
		}
		$('.sNum').html(index);
	},1000);
	
//	信件处理弹窗

	$('.ffFileBtn').click(function(){
		shade('.swapClick','.xjclMask');
	});
	$('.maskBtn a').click(function(){
		$('.swap').css('display','none');              
		$('.xzMask').css('display','none');
	});
	
	$('.cancelBtn').add('.xjclMask img').click(function(){
		$('.swapClick').css('display','none');              
		$('.xjclMask').css('display','none');
	});
		
//		管理员弹窗	
	$('.xj-del-opt').click(function(){
		shade('.delectClick','.delectMask');
	})
	$('.tjBtnActive').click(function(){
		$('.delectClick').css('display','none');              
		$('.delectMask').css('display','none');
	})
	
//	信件处理
   $('.sectionCl .sectionNav img').pullDown();
   $('.sectionC2 .sectionNav img').pullDown();
   $('.sectionC3 .sectionNav img').pullDown();
   $('.sectionC4 .sectionNav img').pullDown();
   $('.error').removeClass().addClass('labelError');


})
