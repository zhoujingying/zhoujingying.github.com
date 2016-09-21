//图片滚动 调用方法 imgScroll
jQuery.fn.extend({
	imgScroll: function() {
		var liThis = $("li", this);
		//初始大小
		var ulWidth = 0;
		for (var i = 0; i < liThis.size(); i++)
			ulWidth += liThis.eq(i).outerWidth(true); //通过循环获得ulWidth的长度

		//循环所需要的元素
		liThis.parent().css({
			width: (ulWidth * 3) + "px"
		}); //设置ul的宽度非视窗，尽可能宽
		liThis.parent().append(liThis.clone()).append(liThis.clone()).append(liThis.clone()); //克隆li
		liThis = $("li", this);

		//滚动
		var liScroll = 0; //滚动的值
		function goto() {
			liScroll += 1; //以1递增滚动
			if (liScroll > ulWidth) //当滚动的距离大于ulWidth
			{
				liScroll = 0;
			}
			liThis.parent().animate({
				left: -liScroll
			}, 0); //回到原位
		};

		//开始
		var move = setInterval(function() {
			goto();
		}, 40); //40为速度
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
$(function() {
	$(".scrollleft").imgScroll();
})