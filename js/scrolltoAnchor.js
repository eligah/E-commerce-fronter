$(document).ready(function(){
    $("#scrolltotable").find("a").attr('page-scroll','#svgcontainer'
    );
})

$(document).ready(function(){
    jQuery.scrollTo=function(scrolldom,scrolltime){
        $(scrolldom).click(function(){
            var scrollToDom = $(this).attr("page-scroll");
            $(this).addClass("thisscroll").siblings().removeClass("thisscroll");
            $('html,body').animate(
                {

                    scrollTop:$(scrollToDom).offset().top
                },
                scrolltime
            );
            return false;
        });
    };
    $.scrollTo("#side",1000);
    $.scrollTo("#scrolltotable a",1000);
});

// 添加active类至导航栏
$(document).ready(function () {
    var tit=getfirstclass()
    var navarray=$(".navbar-nav a");
    for(i=0;i<8;i++){
        var navtext=$(navarray[i]).text()
        if(navtext==tit) {
            $(navarray[i]).parent().addClass("active")
        }
    }
})

//获取当前页面的大类

function getfirstclass(){
      tit=$("head title").text()
    return tit;
}

function getthemecolor(name) {
    switch (name){
        case "数码家电":
            return "rgb(186,143,204)"
            break;
        case "服饰":
            return "rgb(244,146,80)"
            break;
        case "化妆品":
            return "rgb(210,48,204)"
            break;
        case "母婴":
            return "rgb(244,110,173)"
            break;
        case "食品":
            return "rgb(43,215,197)"
            break;
        case "文体":
            return "rgb(22,177,161)"
            break;
        case "家居":
            return  "rgb(115,115,115)"
            break;
        case "车玩具宠物":
            return "rgb(255,240,69)"
            break
        default:
    }

}
$(document).ready(function(){
    $("#loadingajax").text("加载中请稍等")
        .append("<img src='../img/ajax/ajax_loader.gif' width='20px'height='20px'>")
    $("#loadingajax").hide();
})





