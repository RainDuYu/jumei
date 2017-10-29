/**
 * Created by huangyachao on 2017/9/3.
 */




 //����ʱ��ʼ
var timer = setInterval(function () {
        var nowTime = new Date().getTime();
        var futureTime = new Date("2017/9/12 00:00:00").getTime();
        var zsj = futureTime - nowTime;

        //���ʱ����
        if(zsj<=0){
            clearInterval(timer);
            return;
        }
        //ת������,ʱ���룬���룻
        var day = parseInt(zsj / 1000 / 60 / 60 / 24);
        var hour = parseInt(zsj / 1000 / 60 / 60 % 24);
        var minute = parseInt(zsj / 1000 / 60 % 60);
        var second = parseInt(zsj / 1000 % 60);
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        var dsq=document.getElementsByClassName("name-right");
        for(var i=0;i<dsq.length;i++) {
                dsq[i].innerHTML = "还剩" + day + "天" + hour + "小时" + minute + "分钟" + second + "秒";
        }
    },1000);





