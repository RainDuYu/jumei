/**
 * Created by Administrator on 2017/9/3 0003.
 */
//轮播图
$(function(){
    $("#lunbo .ol li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var idx = $(this).index();
        $("#lunbo .ul li").eq(idx).fadeIn(200).siblings().fadeOut(200);
        num  = idx;
    });
    var timer = null;
    var num = 0;
    function autoPlay(){
        num++;
        if(num>$(".ol li").length-1) {
            num = 0;
        }
        $(".ol li").eq(num).addClass("active").siblings().removeClass("active");
        $("#lunbo .ul li").eq(num).fadeIn(200).siblings().fadeOut(200);
    }
    timer = setInterval(autoPlay,3000);
    $("#lunbo").mouseenter(function(){
        clearInterval(timer);
    })
    $("#lunbo").mouseleave(function(){
        timer = setInterval(autoPlay,3000);
    })

//图片特效 更改透明度
$(function(){
    $(".white").mouseenter(function(){
        $(this).css("opacity","0.8");
    })
    $(".white").mouseleave(function(){
        $(this).css("opacity","1");
    })
})

//防止页面跳转
//$("a").click(function(){
//    return false;
//})

//倒计时
var cdArr=document.getElementsByClassName("countdown")
    for(var i=0;i<cdArr.length;i++){
        if(i%2==0){
            fn(new Date('2017/09/11 00:10:00').getTime(),cdArr[i]);
        }
        else{
            fn(new Date('2017/09/13 08:23:00').getTime(),cdArr[i]);
        }
    }
function fn(futureTime,aaa){
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
        aaa.innerHTML="剩余"+day+"天"+hour+"时"+minute+"分"+second+"秒"
    },1000);
}

////日期 明天 后天 周二更改盒子显示
$(function(){
    $("#one .foreshow .tfshow .day span").mouseenter(function(){
        $(this).addClass("d_active").siblings().removeClass("d_active");
        $("#one .foreshow .tfshow .rightul li").eq($(this).index()).show().siblings().hide()
        $("#one .foreshow .tfshow .rightul li").eq($(this).index()).addClass("d_selected").siblings("").removeClass("d_selected");
    })
})

////左侧点击商标显示图片
$(function(){
    $(" .bb").mouseover(function(){
        $(this).eq($(this).index()).next().show().next().show();
        $(this).css({
            'position':'relative',
            'z-index':100
        })
        return false;
    })
    $(".rightul li a").mouseout(function(){
        var $index = $(this).find('.bb').index()
        $(this).find('.bb').eq($index).next().hide().next().hide();
        console.log('mouseout')
        return false;
    })
})
})










