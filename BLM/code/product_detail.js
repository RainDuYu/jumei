/**
 * Created by 包包 on 2017/9/5 0005.
 */
$(function() {

//导航栏
    $("#nav").find("a").mouseenter(function () {
        $(this).css("backgroundColor", "rgba(255,255,255,0.4)").parent().siblings("li").find("a").css("backgroundColor", "");
        $(this).css("text-decoration", "underline").parent().siblings("li").find("a").css("text-decoration", "none");
        $(this).addClass()


    })
    $("#nav").mouseleave(function () {
        $(this).find("a").css("backgroundColor", "")
        $(this).find("a").css("text-decoration", "none");
    })


    $("#product_detail_main .product_detail_main_nav").find("a").mouseenter(function () {
        $(this).css("text-decoration","underline").parent().siblings("span").find("a").css("text-decoration","none");

    })
    $("#product_detail_main .product_detail_main_nav").mouseleave(function () {
        $(this).find("a").css("text-decoration","none");
    })

    $("#product_detail_main .product_detail_main_main .main").find("a").mouseenter(function () {
        $(this).css("text-decoration","underline");
    })
    $("#product_detail_main .product_detail_main_main .main").find("a").mouseleave(function () {
        $(this).css("text-decoration","none");
    })

    $(".img_detail .number .number_b div").mouseenter(function () {
        $(this).css("opacity","0.6");
    })
    $(".img_detail .number .number_b div").mouseleave(function () {
        $(this).css("opacity","1");
    })

    $(".img_detail .number .number_b a").mouseenter(function () {

        $(this).css({

             'box-shadow': '1px 1px 60px -20px #FF9999 inset',
            border:"1px solid #FF9999",
            backgroundColor:"rgba(255,255,255)",
            //"box-shadow":""
        });

    })

    $(".img_detail .number .number_b a").mouseleave(function () {

        $(this).css({
            border:"",
            backgroundColor:"",
            "box-shadow":" 1px 1px 50px -16px #9999B1 inset"
        });

    })
    //放大镜
    $(".product_detail_main_main .product_detil ").mouseenter(function () {
        $(".mask").show();
        $(".big_product").show();

    })
    $(".product_detail_main_main .product_detil ").mouseleave(function () {
        $(".mask").hide();
        $(".big_product").hide();

    })

    //鼠标进入小盒子 黄盒子跟随

    $(".product_detail_main_main .product_detil ").mousemove(function (event) {
        var event=event;
        var maskwidth= $(".product_detail_main_main .product_detil #mask").width()/2;
        var maskheight= $(".product_detail_main_main .product_detil #mask").height()/2;

        //鼠标在盒子中的坐标
        var x= event.pageX- $(".product_detail_main_main .product_detil ").offset().left-maskwidth;
        var y=event.pageY-$(".product_detail_main_main .product_detil ").offset().top-maskheight;

        //console.log(x+"***"+y);
        var small=$(".main .big_product img").width();
        var bigbox=$(".main .big_product").width();
        var smallbox=$(".product_detail_main_main .product_detil ").width();
        var mask=$(".product_detail_main_main .product_detil #mask").width();

        if(x<0){
            x=0;
        }
        if(x>smallbox-mask){

            x=smallbox-mask;
        }
        if(y<0){
            y=0;
        }

        if(y>=$(".product_detail_main_main .product_detil ").height()-$(".product_detail_main_main .product_detil #mask").height()){
        //    alert($(".product_detail_main_main .product_detil ").height()-
        //        $(".product_detail_main_main .produc_detil #mask").height()
        //);
            y=$(".product_detail_main_main .product_detil ").height()-maskheight*2;
        }


        $(".product_detail_main_main .product_detil #mask").css({
            "top":y,
            "left":x,
        })


        //console.log(small, bigbox, smallbox,mask);
        //大图片根据小图片一块移动
        var bili2 = (small-bigbox)/ (smallbox-mask);
        var yy = bili2*y;
        var xx = bili2*x;
        $(".main .big_product img").css({
            "margin-top":-yy,
            "margin-left":-xx
        })
        console.log(x+"***"+y);



    })

//限制范围没弄


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
        $(".main .img_detail .img_detail_1 ").find(".daojishi").html("仅剩 "+hour+"时"+minute+"分"+second+"秒 结束");

    }

    //主体部分
//a链接的效果
    $("#recommendation").find("a").mouseenter(function () {
        $(this).css({
            color:"#F93C7A",
            "text-decoration":"underline",
        })
    })

    $("#recommendation").find("a").mouseleave(function () {
        $(this).css({
            color:"",
            "text-decoration":"",
        })
    })

    //扩展压缩
    $(".mmm .one span").click(function(){
        $(this).parent().find("ol").toggle();
        $(this).css({
            "background":"  #fff url('../xq_images/arraw.jpg') no-repeat 9px -4px"
        })
    })

    $(".mmm .two span").click(function(){
        $(this).parent().find("ol").toggle();
        $(this).css({
            "background":"  #fff url('../xq_images/arraw.jpg') no-repeat 9px 3px"
        })
    })

    //固定导航栏

    $(window).scroll(function () {
        var a= $(".recommendation_r").offset().top;

        var b= $(window).scrollTop();
        console.log(a+"-----"+b);

        $(window).scroll(function () {
            if(b>a){
                // alert(78);
                $(".www").css({
                    "position":"fixed",
                    "top":0,
                    "left":335,
                });
                $(".recommendation_r_main").css("margin-top",'45px ');
            }else{
                // alert(78);
                $(".www").css({
                    "position":"static",
                    "top":" ",
                    "left":" ",
                });
                $(".recommendation_r_main ").css("margin-top",' 0');
            }

        })

    })

    //搜索

    $(".content .button").mouseenter(function () {
        $(this).css({
            "background": 'url("../xq_images/btn_icon.png") no-repeat -741px 0px'

        })
    })
    $(".content .button").mouseleave(function () {
        $(this).css({
            "background": 'url("../xq_images/btn_icon.png") no-repeat -666px 0px'

        })
    })

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