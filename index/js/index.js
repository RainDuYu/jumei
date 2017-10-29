$(function() {
	//初始化
	var n = 0;
	var n2 = $("#hot_deal").offset().top;
	var n3 = $("#incoming_deal").offset().top;

	//事件调用
	Cort(); //淡入淡出动画
	QiangGouTab(); //侧边栏效果
	produceClick(); //加入购物车效果
	desTop(); //获取事件触发所需高度
	getNeededTimer(); //倒计时填充
	fnScroll(); //滚轮事件

	//滚轮事件
	function fnScroll() {
		var top = 0;
		$(window).scroll(function() {
			top = $(document).scrollTop();
			if(top < n) {
				$("#leftAside").removeClass("active").fadeOut();
			} else {
				$("#leftAside").fadeIn().addClass("active");
			}
			if(top > n && top <= n2) {
				asideChange(0)
			} else if(top > n2 && top <= n3) {
				asideChange(1)
			} else if(top > n3) {
				asideChange(2)
			}
		})
	}

	function asideChange(n) {
		$("#leftAside li").eq(n).addClass("active").siblings().removeClass("active");
	}

	//电梯显示距离高度
	function desTop() {
		n = $("header").outerHeight(true) + $(".main #headImg").outerHeight(true) + $(".main .qiangGou").outerHeight(true) + $(".main .middle_img").outerHeight(true);
	}

	//首页轮换图
	function Cort() {
		var num = 0;
		var timer = null;
		auto();
		$("#headImg>ol>li").mouseenter(function() {
			clearInterval(timer);
			num = $(this).index();
			change(num);
		})
		$("#headImg").mouseenter(function() {
			clearInterval(timer);
		}).mouseleave(function() {
			auto();
		})

		function auto() {
			timer = setInterval(autoplay, 3000);
		}

		function autoplay() {
			num++;
			if(num >= $("#headImg>ol>li").length) {
				num = 0;
			}
			change(num);
		}

		function change(num) {
			$("#headImg>ol>li").eq(num).addClass("active").siblings().removeClass("active");
			$("#headImg>ul>li").eq(num).fadeIn(500).siblings().fadeOut(500);
		}
	}

	//抢购选择框
	function QiangGouTab() {
		$(".qiangGou .tab>a").click(function() {
			$(".qiangGou .tab>a").toggleClass("active");
			$(".qiangGou .main").toggle();
			desTop();
		})
	}

	//加入购物车动画
	function produceClick() {
		$(".addBtn").click(function() {
			event.stopPropagation();
			event.preventDefault();
			var e = Number($(this).attr("alt"));
			var flyer = $('<div class="addBox"><img src = "' + goods[e - 1].sImg + '" /></div>');
			flyer.fly({
				start: {
					top: event.clientY - 20,
					left: event.clientX - 20
				},
				end: {
					top: ($(window).height()) / 2 - 40,
					left: $(window).width() - 35,
					width: 25,
					height: 25
				},
				onEnd: function() {
					flyer.fadeOut(200, function() {
						hadAdd(e);
						get20Timer();
						$(this).remove();
					});
				}
			});
		})
	}

	function hadAdd(e) {
		$(".final").show();
		CommNum++;
		var onOff = true;
		for(var i = 0; i < MsgNum.length; i++) {
			if(MsgNum[i].id == e) {
				MsgNum[i].num++;
				onOff = false;
				break;
			}
		}
		if(onOff) {
			MsgNum.push({
				id: e,
				num: 1
			});
		}
		printResult();
	}

		function printResult(){
					$(".showPrice").text(addList());
					$(".MsgNum").text(CommNum);
		}

	function addList() {
		var allPrice = 0;
		$(".shopCarBox .main ul").empty();
		$(".shop_main ul").empty();
		MsgNum.forEach(function(e) {
			var num = Number(e.id) - 1;
			allPrice += Number(goods[num].price) * Number(e.num);
			var oLi = $('<li>' +
				'<a href="#">' +
				'<img src="' + goods[num].sImg + '"/>' +
				'</a>' +
				'<div class="r">' +
				'<a href="#"><span>[极速免税]</span>' + goods[num].name + '</a><br />' +
				'<span>型号：' + goods[num].type + '</span><br />' +
				'<span>￥' + goods[num].price + '</span>' +
				'<span>x' + e.num + '</span>' +
				'</div>' +
				'</li>');
			var soLi = $('<li>' +
				'<div class="pic">' +
				'<a href="#">' +
				'<img src="' + goods[num].sImg + '" alt="" />' +
				'</a>' +
				'</div>' +
				'<div class="word">' +
				'<p>' + goods[num].name + '</p>' +
				'<p><span>¥' + goods[num].price + '</span>x' + e.num + '</p>' +
				'</div>' +
				'</li>');
			$(".shop_main ul").append(soLi);
			$(".shopCarBox .main ul").append(oLi);
		})
		return allPrice;
	}

	//倒计时
	function getNeededTimer() {
		var timer = setInterval(function() {
			var nowTime = new Date().getTime();
			var futureTime = new Date("2017/9/09 10:54:00").getTime();
			var ZSJ = futureTime - nowTime;
			var day = parseInt(ZSJ / 1000 / 60 / 60 / 24);
			var hour = parseInt(ZSJ / 1000 / 60 / 60 % 24);
			var minute = parseInt(ZSJ / 1000 / 60 % 60);
			var second = parseInt(ZSJ / 1000 % 60);
			day = day < 10 ? "0" + day : day;
			hour = hour < 10 ? "0" + hour : hour;
			minute = minute < 10 ? "0" + minute : minute;
			second = second < 10 ? "0" + second : second;
			$(".introduceBox span.time").text("距特卖结束 " + day + "：" + hour + "：" + minute + "：" + second)
			$(".incoming_deal_main p.time").text(day + "天" + hour + "时" + minute + "分" + second + "秒")
		}, 1000)
	}
	//20分钟倒计时
	var timer20 = null;
	function get20Timer() {
		clearInterval(timer20);
		$(".cleanReTime").show();
		var futureTime = new Date().getTime() + 1200000;
		timer20 = setInterval(function() {
			var nowTime = new Date().getTime();
			var ZSJ = futureTime - nowTime;
			var minute = parseInt(ZSJ / 1000 / 60 % 60);
			var second = parseFloat(ZSJ / 1000 % 60).toFixed(2);
			minute = minute < 10 ? "0" + minute : minute;
			second = second < 10 ? "0" + second : second;
			$(".get20Time").html(minute + "分" + second + "秒");
			//			console.log(minute+"分"+second+"秒")
			if(ZSJ <= 0) {
				clearInterval(timer);
			}
		}, 10)
	}

	//加入购物车按钮显示

	$(".hot_deal_main a").mouseenter(function() {
		$(this).find(".addBtn").addClass("active")
	}).mouseleave(function() {
		$(this).find(".addBtn").removeClass("active")
	})
})