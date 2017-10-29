/**
 * Created by 包包 on 2017/9/3 0003.
 */
$(function () {
    $("#in_1>input").focus(function () {
        //获取焦点就失去label
        if(this.value=="护肤"){
            this.value="";
        }
    });
    //失去焦点就显示
    $("#in_1>input").blur(function (){
        if(this.value==""){
            this.value="护肤";
        }

    });

    $("#in_1>a").mouseover(function () {
        $("#in_1>a").css("color","#ed149d");
        $("#in_1>a").css("text-decoration","underline");
    });

    $("#in_1>a").mouseout(function () {
        $("#in_1>a").css("color","");
        $("#in_1>a").css("text-decoration","none");
    });
    //品牌列
    $("#box_3").find("a").mouseover(function(){
        $(this).css('color',"#ED145B").siblings('a').css('color','#666')

        $(this).parent().siblings('li').find('a').css('color','#666')
    });

    $("#box_3").find("a").mouseout(function () {
        $(this).css("color","#666");
    })


    //展开
    $(".link_r>a").mouseenter(function () {
       $(this).css(" background",' url("../hufu_index-images/index_icons1.png") no-repeat 0px 0px');

    });
    //$(".link_r a").click(function () {
    //
    //    $(this).html("收起");
    //    $("ol").toggle();
    //})

    $(".link_r .o").click(function () {

        $(this).html("收起");
        $("ol").css({
            "top":580,
            "left":215
        })
        $("ol").slideToggle();
    })
    $(".link_r .q").click(function () {

        $(this).html("收起");
        $("ol").css({
            "top":374,
            "left":215
        })
        $("ol").slideToggle();
    })
    $(".link_r .b").click(function () {

        $(this).html("收起");
        $("ol").css({
            "top":520,
            "left":215
        })
        $("ol").slideToggle();
    })

    $(".link_r a").mouseleave(function () {

        $(this).html("展开");

    })

    $("ol li").mouseenter(function () {
        $(this).find("a").css("color", "#ED145B");
    })
    $("ol li").mouseleave(function () {
        $(this).find("a").css("color", "");
    })

    //产品展示
    //头部
    $(".sort_1").find("a").mouseenter(function () {
        $(this).css("color","#ED145B");
        $(this).parent().siblings("li").find("a").css("color","");
    })
    $(".sort_1").find("a").mouseleave(function () {
        $(this).css("color","");

    })
    $(".top_right").find("a").mouseenter(function () {
        $(this).css("color","#ED145B");
        $(this).parent().siblings("span").find("a").css("color","");
    })
    $(".top_right").find("a").mouseleave(function () {
        $(this).css("color","");

    })
    $(".sort_1").find("li").eq(3).mouseenter(function () {
        $(this).css("background",' url("../hufu_index-images/desc_selected_hover.png") no-repeat 60px 10px');
    })
    $(".sort_1").find("li").eq(3).mouseleave(function () {
        $(this).css("background",' url("../hufu_index-images/desc_enable2.png") no-repeat 60px 10px');
    })
    $(".sort_1").find("li").eq(2).mouseenter(function () {
        $(this).css("background",' url("../hufu_index-images/desc_selected_hover.png") no-repeat 60px 10px');
    })
    $(".sort_1").find("li").eq(4).mouseleave(function () {
        $(this).css("background",' url("../hufu_index-images/desc_enable2.png") no-repeat 70px 10px');
    })
    $(".sort_1").find("li").eq(2).mouseleave(function () {
        $(this).css("background",' url("../hufu_index-images/desc_enable2.png") no-repeat 60px 10px');
    })
    $(".sort_1").find("li").eq(4).mouseenter(function () {
        $(this).css("background",' url("../hufu_index-images/desc_selected_hover.png") no-repeat 70px 10px');
    })

    //固定导航栏


    $(window).scroll(function () {
        var a= $("#box_main").offset().top;

        var b= $(window).scrollTop();
        //console.log(a+"-----"+b);

        $(window).scroll(function () {
            if($(this).scrollTop()>$("#box_main").offset().top ){
                // alert(78);
                $(".box_main_top").css({
                    "position":"fixed",
                    "top":0,
                    "left":125,
                });
                $(".box_main_main").css("margin-top",' $(".box_main_top").outerHeight()');
            }else{
                // alert(78);
                $(".box_main_top").css({
                    "position":"",
                    "top":"",
                    "left":"",
                });
                $(".box_main_main").css("margin-top",' 0');
            }

        })

    })


//收藏按钮

    $(" .bbb  .tt").mouseenter(function () {
        for(var i=0;i< $(" .bbb  .tt").length;i++) {

                $(this).eq(i).css({
                    "background": 'url("../xq_images/mallsearchbg_v3.jpg") no-repeat -99px -153px'

                })

        }
    })

    $(" .bbb  .tt").mouseleave(function () {
        for(var i=0;i< $(" .bbb  span").length;i++) {

                $(this).eq(i).css({
                    "background": 'url("../hufu_index-images/selectListChange.png") no-repeat 0px -48px'
                })

        }

    })


    //倒计时

    var timer=null;

    timer=setInterval(count_down,1000)

    function count_down () {
        var nowtime=new Date().getTime();
        var futuretime=new Date("2017/9/8 19:10:00").getTime();
        var ZSJ=futuretime-nowtime;


        //var day = parseInt(ZSJ/1000/60/60/24);
        var hour = parseInt(ZSJ/1000/60/60);
        var minute = parseInt(ZSJ/1000/60%60);
        var second = parseInt(ZSJ/1000%60);

        //格式一致

        hour = hour<10?"0"+hour:hour;
        minute = minute<10?"0"+minute:minute;
        second = second<10?"0"+second:second;

        //console.log("仅剩 "+hour+"时"+minute+"分"+second+"秒");
        $(".box_main_main .box_main_first .box_f_f .box_interval").find(".dingshiqi").html("仅剩 "+hour+"时"+minute+"分"+second+"秒");
        hour=hour+24;
        $(".box_main_main .box_main_first .box_f_f .box_interval").find(".dingshiqi_1").html("仅剩 "+hour+"时"+minute+"分"+second+"秒");;

    }




    //链接经过变颜色
    $(".box_main_first").find("a").mouseover(function () {
        $(this).css("color","#ED145B").parent().parent().siblings("div").find("a").css("color","#000");

    });
    $(".box_main_first").find("a").mouseout(function () {

        $(this).css("color","#000");
    })

    $(".box_main_main .box_main_first .box_f_f").mouseenter(function () {
        $(this).css({
            "box-shadow":"1px 2px 15px 4px #999",
        })
    })
    $(".box_main_main .box_main_first .box_f_f").mouseleave(function () {
        $(this).css({
            "box-shadow":"",
        })
    })
    $(".box_main_main .box_main_first .box_f_f").mouseenter(function () {
        $(this).find(".ggg .hhh li").css({
            display:"block",
        })

    })
    $(".box_main_main .box_main_first .box_f_f").mouseleave(function () {
        $(this).find(".ggg .hhh li").css({
            display:"none",
        })
    })


    //最下面的链接

    $(".nearly_history_main_1 .nearly_history_main_main_1 div a").mouseenter(function () {
        $(this).css({
            "color":"#ed149d",
            'text-decoration':'underline'
        });
    })
    $(".nearly_history_main_1 .nearly_history_main_main_1 div a").mouseleave(function () {
        $(this).css("color","");
    })


})