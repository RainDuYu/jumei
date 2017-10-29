
$(function(){
    //普通登录部分开始
    $(".sc input:eq(0)").focus(function(){
        $(".yc").show();
    })
    $(".sc input:eq(0)").blur(function(){
        $(".yc").hide();
    })
    $(".sc input:eq(1)").focus(function(){
        $(".yz").show();
    })
    $(".sc input:eq(1)").blur(function(){
        $(".yz").hide();
    })

    //普通登录部分结束


    //手机动态密码登录开始
    $(".sjhm input").focus(function(){
        $("#sjhm").show();
    })
    $(".sjhm input").blur(function(){
        $("#sjhm").hide();
    })
    $(".dtma input").focus(function(){
        $("#dtma").show();
    })
    $(".dtma input").blur(function(){
        $("#dtma").hide();
    })
    //$(".dtma button").click(function(){
    //if($(".dtma input").("reg: /^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/")){
    //    $("body").css("background","red")
    //}
    //})
    //手机动态密码登录结束
    $(".button .ymdy").click(function(){
        $(".btn").fadeIn(500).show();
        $(".top").hide();
        $(".button .ymdy").attr("checked","chekced");
        $(".button .ymdy").prop("checked",true).parent().siblings("span").find("input").prop("checked",false);
    })
    $(".button .ymdl").click(function(){
        //$(".ymdy").prop("checked",false);
        $(".btn").hide();
        $(".top").fadeIn(500).show();
        $(".button .ymdl").attr("checked","chekced");
        $(".button .ymdl").prop("checked",true).parent().siblings("span").find("input").prop("checked",false);
    })
        $(".grup_box").mousedown(function() {
            var boxX = $(".grug").offset().left;
            var boxW = $(".grug").width();
            var sboxW = $(".grup_box").width();
            var disX = event.offsetX;
            $(document).on("mousemove", function() {
                var x = event.pageX - disX -boxX;
                if(x<=1){
                    x = 0;
                }
                if(x>=boxW-sboxW){
                    x = boxW-sboxW
                }
                $(".grup_box").css("left",x+"px");
            }).mouseup(function() {
                $(document).off("mousemove");
            })
            event.preventDefault();
        })


})
