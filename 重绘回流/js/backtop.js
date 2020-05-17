var rock = document.getElementById("back-top");
rock.addEventListener('click', function () {
    var scrolltop = window.scrollY;
        var timer = setInterval(function () {//定时器启动
            scrolltop -= 50;                   
            if (scrolltop <= 1) {
                 //小火箭隐藏
                  //清除动画
                    //还原小火箭位置
                clearInterval(timer);
            }
            window.scrollTo(0, scrolltop);//设置滚动条距离顶部的距离
        }, 6);
})