$('#top_left').click(function(){
	$('#hide_yi').slideToggle(1000)
})
$('#top_cen').click(function(){
	$('#hide_er').slideToggle(1000)
})
$('#nav_1').mouseenter(function(){
	$('#nav_shou').show()
})
$('#nav_1').mouseleave(function(){
	$('#nav_shou').hide()
}),
$('#nav_2').mouseenter(function(){
	$('#nav_jie').show()
})
$('#nav_2').mouseleave(function(){
	$('#nav_jie').hide()
})
$('#li_1').click(function(){
	$('#jie1').show(200)
	$('#jie2').hide()
	$('#jie3').hide()
})
$('#li_2').click(function(){
	$('#jie1').hide()
	$('#jie2').show(200)
	$('#jie3').hide()
})
$('#li_3').click(function(){
	$('#jie1').hide()
	$('#jie2').hide()
	$('#jie3').show(200)
})
$('#nav_sou').click(function(){
	$('#nav_ul').hide(500)
	$('#kong').show(500)
})
$('#kong_1 span').click(function(){
	$('#nav_ul').show(500)
	$('#kong').hide(500)
})
//轮播图开始
var num = 0;
//定时器函数    
function changeTab() {
	$("#lunbo ol li").mouseover(function() {
	var index = $(this).index(); // 获取当前的索引号
	$("#lunbo ul li").eq(index).fadeIn().siblings().hide();
	//eq(index)指选择选择索引为index的li标签，用fadeIn()显示，siblings()选择除此之外的所有同级元素，用hide()隐藏。
	$(this).addClass('current').siblings().removeClass('current');

});

	num++;
	if(num == 2) {
		num = 0;
	}
	$("#lunbo ul li").eq(num).fadeIn().siblings().hide();
	$("#lunbo ol li").eq(num).addClass('current').siblings().removeClass('current');
}
var yh = setInterval(changeTab, 2000);
$('#lunbo').mouseover(function() {
	$('.tt').show();
	clearInterval(yh);
	$('#lunbo_j').css('margin-left','30px')
	$('#lunbo_t').css('margin-left','30px')
	$('#lunbo_j').css('transition','0.5s')
	$('#lunbo_t').css('transition','0.5s')
});
$('#lunbo').mouseleave(function() {
	$('.tt').hide();
	yh = setInterval(changeTab, 2000);
	$('#lunbo_j').css('margin-left','0px')
	$('#lunbo_t').css('margin-left','0px')
	$('#lunbo_j').css('transition','0.5s')
	$('#lunbo_t').css('transition','0.5s')
});
$('#right').click(function() {
	changeTab()
})
function changeTabb() {
	num--;
	if(num == -1) {
		num = 2;
	}
	$("#lunbo ul li").eq(num).fadeIn().siblings().hide();
	$("#lunbo ol li").eq(num).addClass('current').siblings().removeClass('current');
}
$('#left').click(function() {
	changeTabb()
})

//轮播图结束
//个人用户开始
$('.ge_1').mouseenter(function(){
	$('#ren_1').show()
	$('.ge_1 h3').css('color','#e50012')
})
$('.ge_1').mouseleave(function(){
	$('#ren_1').hide()
	$('.ge_1 h3').css('color','#222222')
})
$('.ge_2').mouseenter(function(){
	$('#ren_2').show()
	$('.ge_2 h3').css('color','#e50012')
})
$('.ge_2').mouseleave(function(){
	$('#ren_2').hide()
	$('.ge_2 h3').css('color','#222222')
})
$('.ge_3').mouseenter(function(){
	$('#ren_3').show()
	$('.ge_3 h3').css('color','#e50012')
})
$('.ge_3').mouseleave(function(){
	$('#ren_3').hide()
	$('.ge_3 h3').css('color','#222222')
})
//个人用户结束
//产品开始
$('#nei_1').mouseenter(function(){
	$('#jiant').css('margin-left','30px'),
	$('#chan_tu').css('margin-top','-410px')
	$('#chan_2').css('margin-top','-583px')
	$('#jiant').css('transition','0.5s'),
	$('#chan_tu').css('transition','0.5s')
	$('#chan_2').css('transition','0.5s')
})
$('#nei_1').mouseleave(function(){
	$('#jiant').css('margin-left','0px'),
	$('#chan_tu').css('margin-top','-390px')
	$('#chan_2').css('margin-top','-604px')
	$('#jiant').css('transition','0.5s'),
	$('#chan_tu').css('transition','0.5s')
	$('#chan_2').css('transition','0.5s')
})
$('#chan_2').mouseenter(function(){
	$('#jianto').css('margin-left','30px')
	$('#jianto').css('transition','0.5s')
})
$('#chan_2').mouseleave(function(){
	$('#jianto').css('margin-left','0px')
	$('#jianto').css('transition','0.5s')
})
//产品结束
//计算产业开始
$('#pengc h2').mouseenter(function(){
	$('#pengc_j').css('margin-left','30px')
	$('#pengc_j').css('transition','0.5s')
})
$('#pengc h2').mouseleave(function(){
	$('#pengc_j').css('margin-left','0px')
	$('#pengc_j').css('transition','0.5s')
})
//计算产业结束
//展会活动开始
$('#zhhd_b h3').mouseenter(function(){
	$('#zhhd_y').css('margin-left','30px')
	$('#zhhd_y').css('transition','0.5s')
})
$('#zhhd_b h3').mouseleave(function(){
	$('#zhhd_y').css('margin-left','0px')
	$('#zhhd_y').css('transition','0.5s')
})
$('#zhhd_1').mouseenter(function(){
	$('#zhhd_j').css('margin-left','30px')
	$('#zhhd_j').css('transition','0.5s')
})
$('#zhhd_1').mouseleave(function(){
	$('#zhhd_j').css('margin-left','0px')
	$('#zhhd_j').css('transition','0.5s')
})
$('#zhhd_2').mouseenter(function(){
	$('#zhhd_jt').css('margin-left','30px')
	$('#zhhd_jt').css('transition','0.5s')
})
$('#zhhd_2').mouseleave(function(){
	$('#zhhd_jt').css('margin-left','0px')
	$('#zhhd_jt').css('transition','0.5s')
})
var index=0;
	$(".num span").mousemove(function () {
	        $(this).addClass("current").siblings().removeClass("current");
	        index=$(this).index();
	        $("#zhhd_lun li").eq(index).stop().fadeIn(3000).siblings().stop().fadeOut(500);
	});
	var time=setInterval(move,3000);
	function move() {
	    index++;
	    if (index==2){
	        index=0
	    }
	    $(".num span").eq(index).addClass("current").siblings().removeClass("current");
	   $("#zhhd_lun li").eq(index).stop().fadeIn(3000).siblings().stop().fadeOut(500);
	};
	$("#zhhd_lun").hover(function () {
	    clearInterval(time);
	},
	function () {
	    time=setInterval(move,3000);
	});
	$(".right_btn").click(function () {
	   move();
	});
	function moveL() {
	     index--;
	    if (index==-1){
	        index=1
	    }
	    $(".num span").eq(index).addClass("current").siblings().removeClass("current");
	    $("#zhhd_lun li").eq(index).stop().fadeIn(3000).siblings().stop().fadeOut(500);
	}
	$(".left_btn").click(function () {
	    moveL();
	});
//展会活动结束
//成功故事开始
$('#cggsn_1').mouseenter(function(){
	$('#cggst_1').css('margin-left','-30px')
	$('#jt_1').css('margin-left','30px')
	$('#cggst_1').css('transition','0.5s')
	$('#jt_1').css('transition','0.5s')
})
$('#cggsn_1').mouseleave(function(){
	$('#cggst_1').css('margin-left','0px')
	$('#jt_1').css('margin-left','0px')
	$('#cggst_1').css('transition','0.5s')
	$('#jt_1').css('transition','0.5s')
})
$('#cggsn_2').mouseenter(function(){
	$('#cggst_2').css('margin-left','-30px')
	$('#jt_2').css('margin-left','30px')
	$('#cggst_2').css('transition','0.5s')
	$('#jt_2').css('transition','0.5s')
})
$('#cggsn_2').mouseleave(function(){
	$('#cggst_2').css('margin-left','0px')
	$('#jt_2').css('margin-left','0px')
	$('#cggst_2').css('transition','0.5s')
	$('#jt_2').css('transition','0.5s')
})
$('#cggsn_3').mouseenter(function(){
	$('#cggst_3').css('margin-left','-30px')
	$('#jt_3').css('margin-left','30px')
	$('#cggst_3').css('transition','0.5s')
	$('#jt_3').css('transition','0.5s')
})
$('#cggsn_3').mouseleave(function(){
	$('#cggst_3').css('margin-left','0px')
	$('#jt_3').css('margin-left','0px')
	$('#cggst_3').css('transition','0.5s')
	$('#jt_3').css('transition','0.5s')
})
$('#cggs_n h3').mouseenter(function(){
	$('#cggs_y').css('margin-left','30px')
	$('#cggs_y').css('transition','0.5s')
})
$('#cggs_n h3').mouseleave(function(){
	$('#cggs_y').css('margin-left','0px')
	$('#cggs_y').css('transition','0.5s')
})
//成功故事结束
//近期新闻开始
$('#jqxw_2 h3').mouseenter(function(){
	$('#jqxw_y').css('margin-left','30px')
	$('#jqxw_y').css('transition','0.5s')
})
$('#jqxw_2 h3').mouseleave(function(){
	$('#jqxw_y').css('margin-left','0px')
	$('#jqxw_y').css('transition','0.5s')
})
$('#jqxw_1').mouseenter(function(){
	$('#jqxw_j').css('margin-left','30px')
	$('#jqxw_j').css('transition','0.5s')
})
$('#jqxw_1').mouseleave(function(){
	$('#jqxw_j').css('margin-left','0px')
	$('#jqxw_j').css('transition','0.5s')
})
//近期新闻结束
