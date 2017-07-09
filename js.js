/**
 * Created by dell on 2017/7/8.
 */
window.onload = function () {
    var Lunbo = document.getElementById('Lunbo'),
        Lun = document.getElementById('Lun').getElementsByTagName('img'),
        bo = document.getElementById('bo').getElementsByTagName('li'),
        index = 0,
        timer = setInterval(autoPlay,3000);
    function autoPlay() {
        if(++index >= Lun.length) index = 0;
        changeLun(index);
    }
    function changeLun(ccc) {
        for (var i =0;i<Lun.length;++i){
            Lun[i].style.display= "none";
            bo[i].className = "";
        }
        Lun[ccc].style.display = "block";
        bo[ccc].className = "on";
    }
    Lunbo.onmouseover = function () {
        clearInterval(timer);
    }
    Lunbo.onmouseout = function () {
        timer = setInterval(autoPlay,3000);
    }

    var speed=10; //数字越大速度越慢
    var tab=document.getElementById("demo");
    var tab1=document.getElementById("demo1");
    var tab2=document.getElementById("demo2");
    tab2.innerHTML=tab1.innerHTML;
    function Marquee(){
        if(tab2.offsetWidth-tab.scrollLeft<=0)
            tab.scrollLeft-=tab1.offsetWidth
        else{
            tab.scrollLeft++;
        }
    }
    var MyMar=setInterval(Marquee,speed);
    tab.onmouseover=function() {clearInterval(MyMar)};
    tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
}



