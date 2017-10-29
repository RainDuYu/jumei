$(function(){
    $(".ssl input").focus(function(){
        $(".ssl>div>div").eq($(this).index("input")).show();
    }).blur(function(){
        $(".ssl>div>div").hide()
    })


    reChange({
        obj: $(".ssl input:eq(0)"),
        re:  /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        setTrue: function () {
            $(".ssl div:eq(0) div").show().html("输入正确").css("color","greenyellow");
            $(".ssl input:eq(0)").removeClass().addClass("green")
        },
        setFalse: function () {
            $(".ssl div:eq(0) div ").show().html("您输入的手机号码格式有误，需为 11 位数字格式").css("color","red");
            $(".ssl input:eq(0)").removeClass().addClass("red");
        }
    })

    reChange({
            obj: $(".ssl input:eq(1)"),
            re:  /^\d{6}$/,
        setTrue: function () {
            $(".ssl div:eq(2) div").show().html("输入正确").css("color","greenyellow");
            $(".ssl input:eq(1)").removeClass().addClass("green")
        },
        setFalse: function () {
            $(".ssl div:eq(2) div").show().html("请您输入正确的验证码").css("color","red");
            console.log($(".ssl div:eq(1) div"));
            $(".ssl input:eq(1)").removeClass().addClass("red");
        }
    })

    reChange({
        obj: $(".ssl input:eq(2)"),
        re:  /^[a-zA-Z]\w{5,17}$/,
        setTrue: function () {
            $(".ssl div:eq(4) div").show().html("输入正确").css("color","greenyellow");
            $(".ssl input:eq(2)").removeClass().addClass("green")
        },
        setFalse: function () {
            $(".ssl div:eq(4) div").show().html("为了您的账号安全，密码长度只能在 6-16 个字符之间").css("color","red");
            console.log($(".ssl div:eq(1) div"));
            $(".ssl input:eq(2)").removeClass().addClass("red");
        }

    });

    reChange({
        obj: $(".ssl input:eq(3)"),
        re:  /^[a-zA-Z]\w{5,17}$/,
        setTrue: function () {
            $(".ssl div:eq(6) div").show().html("输入正确").css("color","greenyellow");
            $(".ssl input:eq(4)").removeClass().addClass("green")
        },
        setFalse: function () {
            $(".ssl div:eq(6) div").show().html("两次密码输入不一致，请重新输入").css("color","red");
            console.log($(".ssl div:eq(1) div"));
            $(".ssl input:eq(4)").removeClass().addClass("red");
        }
    })






    function reChange(o){
            o.obj.blur(function(){
                if(o.re.test($(this).val())){
                    o.setTrue();
                }else {
                    o.setFalse()
                }
            })
        }


})