
    window.onload=function () {
        var iconnameh3=$(".iconshow h3");
        for( i=0;i<8;i++){
            var iconname=$(iconnameh3[i]).text()
                    $($(iconnameh3[i]).parent()[0])
                        .css("color",getthemecolor(iconname))
            }
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
//修改鼠标放上去和取出来,图标的背景颜色和样式
    $(".iconshow a").hover(function(){
             var adiv=$(this).parent();
            var iconimg=$(this).find("img");
            var iconnameh3=$(this).find("h3");
            var iconname=iconnameh3.text();
            var iconsrc=iconimg.attr("src");
            iconsrc=iconsrc.replace("click","white");
            var hover=0;
                    adiv.css("background-color",getthemecolor(iconname))
                    iconimg.attr("src",iconsrc);
                    $(this).css("color","white")
            },
        function(){
            var adiv=$(this).parent();
            var iconimg=$(this).find("img");
            var iconnameh3=$(this).find("h3");
            var iconname=iconnameh3.text();
            var iconsrc=iconimg.attr("src");
            iconsrc=iconsrc.replace("white","click");
                    adiv.css("background-color","rgb(255,255,255)");
                    iconimg.attr("src",iconsrc);
                    $(this).css("color",getthemecolor(iconname))
        });