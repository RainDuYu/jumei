$(function () {
    Search();
    showShop();
    function Search() {
        var arr = ["兰蔻", "保温", "Niko", "护肤", "保湿", "洗面奶", "洗发水", "Niile", "兰花", "shuuemura", "KS", "Balea", "Spa Treatment蛇毒眼膜", "玻尿酸", "Graymelin", "air cotton植物防晒隔离霜", "补水", "补水保湿", "CC美容液", "英国Go ahead酸奶水果夹心饼干", "植村秀(shuuemura)绿茶新肌洁颜油"];
        var ipt = $("#searchIpt");
        var box = $("#keyWord");
        var str = "";
        for (var i = 0; i < 6; i++) {
            str += "<li><a href = '#'>" + arr[i] + "</a></li>";
        }
        box.find("ul").html(str);
        ipt.focus(function () {
            box.show();
        }).blur(function () {
            box.removeAttr("style");
        }).on("input", function () {
            if ($(this).val().trim() == "") {
                box.find("ul").html(str);
                return false;
            }
            var newStr = "";
            box.find("ul").empty();
            var re = new RegExp($(this).val(), "gi");
            arr.forEach(function (e) {
                if (re.test(e)) {
                    newStr += "<li><a href = '#'>" + e + "</a></li>";
                }
                ;
            })
            if (newStr != "") {
                box.show()
                box.find("ul").html(newStr);
            } else {
                box.hide()
            }
        })
    }

    function showShop() {
        $("#nav_shop").mouseenter(function () {
            $("header .show_box").css("height", "308px").mouseleave(function () {
                $(this).removeAttr("style")
            });
        }).mouseleave(function () {
            $("header .show_box").removeAttr("style")
        });
    }

    asideAction();
    function asideAction() {
        //侧边栏显示
        var aside = document.getElementsByTagName("aside")[0];
        var shopCar = document.getElementById("shopCar");
        $(document).mousemove(function () {
            var x = event.clientX;
            var max = document.body.offsetWidth - 35;
            if (x >= max) {
                asideShow();
            }
        });
        shopCar.onmouseenter = asideShow;
        aside.onmouseleave = asideHide;

        function asideShow() {
            shopCar.className = "active";
            aside.className = "active";
        }

        function asideHide() {
            shopCar.className = "";
            aside.className = "";
        }

        $("#shopCar").click(function () {
            aside.onmouseleave = null;
            $(".shopCarBox").addClass("active");
        })
        $(".shopCarBox .exitBtn").click(function () {
            $(this).parent().removeClass("active");
            aside.onmouseleave = asideHide;
            setTimeout(function () {
                asideHide();
            }, 500)
            return false;
        })
        //个人信息显示
        $("#Person").mouseenter(function () {
            $(this).find(".personMessage").show()
        }).mouseleave(function () {
            $(this).find(".personMessage").hide();
        })
        //退出按钮
        $("aside .exitBtn").click(function () {
            $(this).parent().hide();
            return false;
        })
        //二维码
        $("#erweiImg").mouseenter(function () {
            $(this).find(".erweiImg").show()
        }).mouseleave(function () {
            $(this).find(".erweiImg").hide();
        })
    }
})
//倒计时
var timer = setInterval(function () {
    var nowTime = new Date();
    var futureTime = new Date("2017/10/20 19:56:00");
    var ZSJ = futureTime - nowTime;
    if (ZSJ < 0) {
        document.getElementsByTagName("div")[0].innerHTML = "时间到"
        clearInterval(timer);
        return;
    }


    var day = parseInt(ZSJ / 1000 / 60 / 60 / 24);
    var hour = parseInt(ZSJ / 1000 / 60 / 60 % 24);
    var mintue = parseInt(ZSJ / 1000 / 60 % 60);
    var second = parseInt(ZSJ / 1000 % 60);


    day < 10 ? "0" + day : day;
    hour < 10 ? "0" + hour : hour;
    mintue < 10 ? "0" + mintue : mintue;
    second < 10 ? "0" + second : second;
    document.getElementsByClassName("bt-tr")[0].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[1].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[2].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[3].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[4].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[5].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[6].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[7].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[8].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[9].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[10].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[11].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[12].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[13].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[14].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[15].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[16].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[17].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[18].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[19].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[10].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[20].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[21].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[22].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[23].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[24].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[25].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[26].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[27].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[28].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[29].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[30].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[31].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[32].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[33].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[34].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[35].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[36].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[37].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[38].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
    document.getElementsByClassName("bt-tr")[39].innerHTML = "距活动结束还有" + day + "天" + hour + "小时"
        + mintue + "分钟" + second + "秒";
}, 1);
//淡入淡出轮播图
$(document).ready(function () {

    var timer = null;
    var num = 0;

    $("#screen ol li").mouseover(function () {
        core($(this).index());
        num = $(this).index();
    });
    //====================
    function core(num) {
        $("#nav li").eq(num).addClass("active").siblings().removeClass("active");
        // 每隔1.5秒 让ul里面的li 对应的li（本来是索引 这里索引用变量来控制）淡入，让别人淡出
        $("#screen ul li").eq(num).fadeIn(500).siblings().fadeOut(500);
    }

    function autoPlay() {
        num++;
        if (num > $("#nav li").length - 1) num = 0;
        core(num);
    }

    timer = setInterval(autoPlay, 1500);
    $("#screen").mouseenter(function () {
        clearInterval(timer);
        $("#screen>a").fadeIn();
    })
    $("#screen").mouseleave(function () {
        timer = setInterval(autoPlay, 1500);
        $("#screen>a").fadeOut();
    })
    $("#left").click(function () {
        num--;
        if (num < 0) num = $("#nav li").length - 1;
        core(num);
    })
    $("#right").click(function () {
        autoPlay();
    })
})
//左侧tab栏切换
$(function () {
    $("#tab-a> li").mouseenter(function () {
        var idx = $(this).index();
        $("#tab-b li").eq(idx).show(200).siblings().hide(100);
    });
    $("#tab-b> li").mouseleave(function () {
        var idx = $(this).index();
        $("#tab-b li").eq(idx).hide();

    });


})




