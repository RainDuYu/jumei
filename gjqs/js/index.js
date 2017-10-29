/**
 * Created by Administrator on 2017/9/5.
 */

$(function () {

    /*顶部轮播图广告位*/
    $("#banner ol li").click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        var idx = $(this).index();
        $("#banner ul li").eq(idx).fadeIn(500).siblings("li").fadeOut(500);
        num = idx;
    });
    var timer = null;
    var num = 0;
    function autoplay(){
        num++;
        if(num>$(".circle li").length-1){
            num = 0;
        }
        $(".circle li").eq(num).addClass("active").siblings().removeClass("active");
        $("#banner ul li").eq(num).fadeIn(1000).siblings().fadeOut(1000);
    }
    timer = setInterval(autoplay,1500);
    $("#banner").mouseover(function () {
        clearInterval(timer);
    })
    $("#banner").mouseout(function () {
        timer = setInterval(autoplay,1500);
    })


    /*品牌广告位*/
    $(".brand-ad .brand a img").mouseenter(function(){
        $(this).css("opacity",0.6).siblings().css("opacity",1);
    })
    $(".brand-ad .brand a img").mouseleave(function(){
        $(this).css("opacity",1);
    })

/*倒计时*/
var cdArr=document.getElementsByClassName("today_time")

for(var i=0;i<cdArr.length;i++){

    if(i%2==0){
        fn(new Date('2017/09/12 00:00:00').getTime(),cdArr[i]);
    }
    if(i%2!==0){
        fn(new Date('2017/09/10 00:00:00').getTime(),cdArr[i]);
    }
}
function fn(futureTime,a){
    var timer=setInterval(function(){
        var nowTime=new Date().getTime();
        var sjc=futureTime-nowTime;
        if(sjc<=0){
            clearInterval(timer);
            return;
        }
        var day=parseInt(sjc/1000/60/60/24);
        var hour=parseInt(sjc/1000/60/60%24);
        var minute=parseInt(sjc/1000/60%60);
        var second=parseInt(sjc/1000%60);
        day=day<10?"0"+day:day;
        hour=hour<10?"0"+hour:hour;
        minute=minute<10?"0"+minute:minute;
        second=second<10?"0"+second:second;
         a.innerHTML="剩余"+day+"天"+hour+"时"+minute+"分"+second+"秒";
    },1000);
}
})

