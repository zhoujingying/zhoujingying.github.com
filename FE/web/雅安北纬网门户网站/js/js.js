/**
 * Created by zss on 2016/3/19.
 */
$(document).ready(function() {

    //获取轮播ID
    //var CarouselId;
//    var currentTimer;
//    var CarouselId1;
//    var CarouselId2;
//    var CarouselId3;
    //切换速度
    var speedT = 500;
    //延迟时间
    var delayT = 4000;

    clone('#Carousel .carousel-img ul');
    clone('#Carousel1 .carousel-img ul');
    clone('#Carousel2 .carousel-img ul');
    clone('#Carousel4 .carousel-img ul');
    clone('#Carousel5 .carousel-img ul');

    var CarouselId = "Carousel";
    var CarouselId1 = "Carousel1";
    var CarouselId2 = "Carousel2";
    var CarouselId4 = "Carousel4";
    var CarouselId5 = "Carousel5";

    lb('#'+CarouselId);
    lb('#'+CarouselId1);
    lb('#'+CarouselId2);
    lb('#'+CarouselId5);
    lb('#'+CarouselId4);

    //轮播
    function lb(Carousel){
        var len = $(Carousel+' .carousel-img ul').eq(0).find("li").length;
        var historyImgWidth=$(Carousel+' .carousel-img ul li').eq(0).width();
        $(Carousel+' .carousel-img ul').width(len*historyImgWidth);


        $(Carousel+' .carousel-des-sp a').eq(0).show().siblings().hide();
        $(Carousel+' .carousel-img ul').eq(0).find("li").eq(0).addClass("cur-li");

        $(Carousel+' .opt-pre').click(function(){
            if(!$(Carousel+' .carousel-img ul').is(':animated')) {
                clickPlay_left(Carousel+' .carousel-img ul', historyImgWidth,Carousel+' .carousel-img ul .cur-li');
                spChg(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-des-sp a');
            }

        });
        $(Carousel+' .opt-next').click(function(){
            if(!$(Carousel+' .carousel-img ul').is(':animated')) {
                clickPlay_right(Carousel+' .carousel-img ul', historyImgWidth,Carousel+' .carousel-img ul .cur-li');
                spChg(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-des-sp a');
            }

        });

        $(Carousel+' .carousel-chg a').click(function () {
//            clickChg(Carousel+' .carousel-img ul');

            var startIndex = $(Carousel+' .carousel-chg-cur').index();
            $(this).addClass("carousel-chg-cur").siblings().removeClass("carousel-chg-cur");
            var index = $(this).index();
            var offset=index-startIndex;

            for(var i=0;i<$(Carousel+' .carousel-img ul').length;i++){
                var nowPositioin=$(Carousel+' .carousel-img ul').eq(i).position().left;
                if(-nowPositioin>=$(Carousel+' .carousel-img ul').eq(i).width()){
                    var left=$(Carousel+' .carousel-img ul').eq(i).siblings().position().left;
                    $(Carousel+' .carousel-img ul').eq(i).stop().css({'left':$(Carousel+' .carousel-img ul').eq(i).width()+left+'px'},600);
                }
                var nowPositioin2=$(Carousel+' .carousel-img ul').eq(i).position().left;
                $(Carousel+' .carousel-img ul').eq(i).stop().animate({'left':nowPositioin2-historyImgWidth*offset+'px'},600);
                $(Carousel+' .carousel-img ul').eq(0).find("li").eq(index).addClass("cur-li").siblings().removeClass("cur-li");
            }
            spChg(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-des-sp a');
        });
        //圆点点击切换
//        function clickChg(CarouselUl){
//        }

        function timePlay(div){
//            $(Carousel+' .carousel-img ul li').eq(0).addClass("cur-li");
            if(!$(div).is(':animated')){
                for(var i=0;i<$(div).length;i++){
                    var nowPositioin=$(div).eq(i).position().left;
                    if(-nowPositioin>=$(div).eq(i).width()){
                        var left=$(div).eq(i).siblings().position().left;
                        $(div).eq(i).stop().css({'left':$(div).eq(i).width()+left+'px'},speedT);
                    }
                        var nowPositioin2=$(div).eq(i).position().left;

                        $(div).eq(i).stop().animate({'left':nowPositioin2-historyImgWidth+'px'},speedT);

                }
                nextLi(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-img ul li',Carousel+' .carousel-chg a');
                spChg(Carousel+' .carousel-img ul .cur-li',Carousel+' .carousel-des-sp a');
            }

        }

        var timer =window.setInterval(function()
        {
            timePlay(Carousel+' .carousel-img ul');
        }, delayT);
//        return timer;



        function clickPlay_right(div,imgwidth,curLi){
            if(!$(div).is(':animated')){
                for(var i=0;i<$(div).length;i++){
                    if($(div).eq(i).position().left<=-$(div).eq(i).width()){
                        var pervLeft= $(div).eq(i).siblings().position().left;
                        $(div).eq(i).css({'left':pervLeft+$(div).eq(i).width()+'px'});
                    }
                    var historyContainer=$(div).eq(i).position().left;
                    var news_position=historyContainer-imgwidth;
                    $(div).eq(i).stop(true,true).animate({'left':news_position+'px'},speedT);
                }
            }
            var a=$(curLi).index();
            //var index =a==4?0:a;
            var indexNext;
            if(a == len-1){
                indexNext=0;
            }else{
                indexNext=a+1;
            }
            moveT(indexNext,Carousel+' .carousel-chg a',Carousel+' .carousel-img ul li');
        }

        function clickPlay_left(div,imgwidth,curLi){
            if(!$(div).is(':animated')){
                for(var i=0;i<$(div).length;i++){
                    if($(div).eq(i).position().left>=$(div).parent().width()){
                        var pervLeft= $(div).eq(i).siblings().position().left;

                        $(div).eq(i).css({'left':-$(div).eq(i).width()+pervLeft+'px'})
                    }
                    var historyContainer=$(div).eq(i).position().left;
                    var news_position=historyContainer+imgwidth;
                    $(div).eq(i).stop(true,true).animate({'left':news_position+'px'},speedT);
                }

            }
            var a=$(curLi).index();
            //var index =a==4?0:a;
            var indexNext;
            if(a == 0){
                indexNext=len-1;
            }else{
                indexNext=a-1;
            }
            moveT(indexNext,Carousel+' .carousel-chg a',Carousel+' .carousel-img ul li');

        }

        function nextLi(curLi,curImg,num){
            var a=$(curLi).next().index();
            //        a=(a+4)%4;
            if($(curLi).index()<len-1){
                $(curLi).next().addClass("cur-li").siblings().removeClass("cur-li");
                var i = $(curLi).index();
                $(num).eq(i).addClass("carousel-chg-cur").siblings().removeClass("carousel-chg-cur");
            }
            else{
                $(curImg).eq(0).addClass("cur-li").siblings().removeClass("cur-li");
                var i = $(curLi).index();
                $(num).eq(i).addClass("carousel-chg-cur").siblings().removeClass("carousel-chg-cur");
            }
        }
        //序号，当前图片切换
        function moveT(indexNext,num,curImg){
            $(num).eq(indexNext).addClass("carousel-chg-cur").siblings().removeClass("carousel-chg-cur");
            $(curImg).eq(indexNext).addClass("cur-li").siblings().removeClass("cur-li");
        }
        //文字改变
        function spChg(CurLi,imgSp) {
            var chg_index = $(CurLi).index();
            $(imgSp).eq(chg_index).show().siblings().hide();
            $(imgSp).eq(chg_index).find(".ly-chg-num span").html("0"+(chg_index+1));
        }
        //鼠标移入移出控制暂停或继续滚动
        $(Carousel).mouseover(function(){
            clearInterval(timer);
        });
        $(Carousel).mouseout(function(){
            timer =window.setInterval(function()
            {
                timePlay(Carousel+' .carousel-img ul');
            }, delayT);
        });



    }
    //end 轮播

    function clone(div){
        var divclone=$(div).clone();
        $(div).after(divclone);
        var divWidth=$(div).width();
        for(var i=0;i<$(div).parent().children().length;i++){
            $(div).parent().children().eq(i).css({'left':divWidth*i+'px'});
        }
    }



});


