/**
 * Created by Administrator on 2017/9/3.
 */

$(function () {

//轮播图
    (function(window){

        var timer=null;
        var num=0;

        $(".banner ol#nav li").mouseenter(function () {
            num=$(this).index();
            core(num);
        });

        function core(num){
            $(".banner ol#nav li").eq(num).addClass("active")
                .siblings().removeClass("active");
            $(".banner .screen ul li").eq(num).fadeIn(600).siblings().fadeOut(600);
        }

        function auoPlay(){
            num++;
            if(num>$("#nav li").length-1) num=0;
            core(num);
        }

        timer=setInterval(auoPlay,4000);

        $(".banner .screen").mouseenter(function () {
            clearInterval(timer);
        });
        $(".banner .screen").mouseleave(function () {
            timer=setInterval(auoPlay,4000);
        });

    })(window)


//每日必看--透明度设置
    $(".check .content-l .product").mouseenter(function () {
        $(this).children(".pro-r").css("opacity","0.8");
    });
    $(".check .content-l .product").mouseleave(function () {
        $(this).children(".pro-r").css("opacity","1");
    });



//品牌预告--弹窗
    $(".check .tomorrow .pro-l, .check .tomorrow .pro-r").mouseenter(function () {
        $(this).css("background-position","-35px -135px");
        $(this).children(".pic-pop").stop().show();

    });
    $(".check .tomorrow .pro-l, .check .tomorrow .pro-r").mouseleave(function () {
        $(this).css("background-position","-9999px -9999px");
        $(this).children(".pic-pop").stop().hide();
    });



//每日必看--倒计时模块
    (function (window) {

        function fn(test,yy,mm,dd,hh,mi,se){//2017/09/10 23:59:59

        var timer=null;
        timer=setInterval(function () {
            //获取时间
            var nowTime=new Date().getTime();
            var futureTime=new Date(yy+"/"+mm+"/"+dd+" "+hh+":"+mi+":"+se).getTime();
            var tm=futureTime-nowTime;

            //时间转换
            var day=parseInt(tm/1000/60/60/24);
            var hour=parseInt(tm/1000/60/60%24);
            var minute=parseInt(tm/1000/60%60);
            var second=parseInt(tm/1000%60);
            var ms=tm%1000;

            //输出格式特殊处理
            day=day<10?"0"+day:day;
            hour=hour<10?"0"+hour:hour;
            minute=minute<10?"0"+minute:minute;
            second=second<10?"0"+second:second;
            if(ms<10){
                ms="00"+ms;
            }else if(ms<100){
                ms="0"+ms;
            }



            $(".check .content-l >a:nth-child("+test+") .timer span:eq(1)").text(day);
            $(".check .content-l >a:nth-child("+test+") .timer span:eq(2)").text(hour);
            $(".check .content-l >a:nth-child("+test+") .timer span:eq(3)").text(minute);
            $(".check .content-l >a:nth-child("+test+") .timer span:eq(4)").text(second);


        },1);
        }

        for(var i = 0 ; i <= $('.content-l').find('a').length;i++){

            if(i%2==0){
                fn(i,2017,09,08,23,59,59);
            }else if(i%3==0){
                fn(i,2017,09,09,23,59,59);
            }else if(i%4==0 && i%5==0){
                fn(i,2017,09,10,23,59,59);
            }else{
                fn(i,2017,09,11,23,59,59);
            }

        }

    })(window)


//品牌预告--获取日期
        var d=new Date();
        var month=d.getMonth()+1;
        var day=d.getDate();
        var day2=day+1;
        var day3=day2+1;
        var day4=day3+1;
        var week = d.getDay()+3;
        var arrWeek=["日","一","二","三","四","五","六","日","一","二"];

        month=month<10?"0"+month:month;
        day=day<10?"0"+day:day;
        day2=day2<10?"0"+day2:day2;
        day3=day3<10?"0"+day3:day3;



        $(".check .content-r .pro >.tomorrow:nth-child(1) i:eq(0) ").text(month);
        $(".check .content-r .pro >.tomorrow:nth-child(2) i:eq(0) ").text(month);
        $(".check .content-r .pro >.tomorrow:nth-child(3) i:eq(0) ").text(month);

        $(".check .content-r .pro >.tomorrow:nth-child(1) i:eq(1) ").text(day2);
        $(".check .content-r .pro >.tomorrow:nth-child(2) i:eq(1) ").text(day3);
        $(".check .content-r .pro >.tomorrow:nth-child(3) i:eq(1) ").text(day4);


        $(".check .content-r .pro >.tomorrow:nth-child(3) b>strong").text((arrWeek[week]));





    //console.log(month);






//返回顶部
    $(window).scroll(function(){

        if($(this).scrollTop()>500) {
            $("aside .to-top").show();
        } else {
            $("aside .to-top").hide();
        }
    });

    $("aside .to-top").click(function () {

        window.scrollTo(0,0);
    });

});
