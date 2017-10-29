$(function() {
	Search();
	showShop();
	asideAction();
	var CommNum = 0;
	if(CommNum == 0) {
		$(".shopCarBox .main ul").html('<img src="img/null_cart.JPG"/>')
	}
	
	function Search() {
		var arr = ["兰蔻", "保温", "Niko", "护肤", "保湿", "洗面奶", "洗发水", "Niile", "兰花", "shuuemura", "KS", "Balea", "Spa Treatment蛇毒眼膜", "玻尿酸", "Graymelin", "air cotton植物防晒隔离霜", "补水", "补水保湿", "CC美容液", "英国Go ahead酸奶水果夹心饼干", "植村秀(shuuemura)绿茶新肌洁颜油"];
		var ipt = $("#searchIpt");
		var box = $("#keyWord");
		var str = "";
		for(var i = 0; i < 6; i++) {
			str += "<li><a href = '#'>" + arr[i] + "</a></li>";
		}
		box.find("ul").html(str);
		ipt.focus(function() {
			box.show();
		}).blur(function() {
			box.removeAttr("style");
		}).on("input", function() {
			if($(this).val().trim() == "") {
				box.find("ul").html(str);
				return false;
			}
			var newStr = "";
			box.find("ul").empty();
			var re = new RegExp($(this).val(), "gi");
			arr.forEach(function(e) {
				if(re.test(e)) {
					newStr += "<li><a href = '#'>" + e + "</a></li>";
				};
			})
			if(newStr != "") {
				box.show()
				box.find("ul").html(newStr);
			} else {
				box.hide()
			}
		})
	}

	function showShop() {
		$("#nav_shop").mouseenter(function() {
			$("header .show_box").css("height", "308px").mouseleave(function() {
				$(this).removeAttr("style")
			});
		}).mouseleave(function() {
			$("header .show_box").removeAttr("style")
		});
	}

	function asideAction() {
		//		$("#shopCar").mouseover(function(){
		//			$(this).addClass("active");
		//			$("aside").addClass("active").mouseleave(function(){
		//				$(this).removeClass("active");
		//				$("#shopCar").removeClass("active")
		//			})
		//		})
		//侧边栏显示
		var aside = document.getElementsByTagName("aside")[0];
		var shopCar = document.getElementById("shopCar");
		$(document).mousemove(function() {
			var x = event.clientX;
			var max = document.body.offsetWidth - 35;
			if(x >= max) {
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
		$("#shopCar").click(function() {
			aside.onmouseleave = null;
			$(".shopCarBox").addClass("active");
		})
		$(".shopCarBox .exitBtn").click(function() {
			$(this).parent().removeClass("active");
			aside.onmouseleave = asideHide;
			setTimeout(function() {
				asideHide();
			}, 500)
			return false;
		})
		//个人信息显示
		$("#Person").mouseenter(function() {
			$(this).find(".personMessage").show()
		}).mouseleave(function() {
			$(this).find(".personMessage").hide();
		})
		//退出按钮
		$("aside .exitBtn").click(function() {
			$(this).parent().hide();
			return false;
		})
		//二维码
		$("#erweiImg").mouseenter(function() {
			$(this).find(".erweiImg").show()
		}).mouseleave(function() {
			$(this).find(".erweiImg").hide();
		})
	}
})