/**
 * Created by eligah on 2016/5/13.
 */
function getshopcode(){
    return tit=$("head title").text()
}

$(document).ready(function(){
    $("#loadingajax").text("加载中请稍等")
        .append("<img src='img/ajax/ajax_loader.gif' width='20px'height='20px'>")
    $("#loadingajax").hide();
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
});

// http://119.29.158.92/shunfeng/getAllGoods?mall=2&topId=酒类&typeId1=中外名酒&typeId2=洋酒&page=1&length=20
function getrank(goodstype1,goodstype2,goodstype3) {
    var jsonParam={"mall":getshopcode(),"topId": goodstype1,"typeId1":goodstype2,"typeId2":goodstype3,"page":1,"length":20};
    var url1="http://119.29.158.92/shunfeng/getAllGoods";
    $.ajax({
        type: "POST",
        url: url1,
        data: jsonParam,
        beforeSend:function(){
            $("#loadingajax").show();
            $("#rank").remove();
            $("#secondtitle").hide();
            $("#resultcontainer").append("<div id='rank'></div>")
        },
        success: function (data) {
         
                console.log(data);
                var circleR=8;
                data = data.goods;
                var svg = d3.select("#rank")
                    .append("svg")
                    .attr("width","100%")
                    .attr("height",1000)
                    .attr("class","rank");

                var Group = svg.selectAll("g")
                    .data(data)
                    .enter()
                    .append("g")
                    .attr("class","ramkgroup")
                    .attr("transform",function (d,i) {
                        return "translate(" + 10+ "," + (i*30+10) + ")";
                    });



            Group.append("a")
                .attr("xlink:href",function (d) {
                    return d.url
                })
                .append("text")
                .attr("class","rankname")
                .text(function (d) {
                    return d.title;
                })
                .attr("dx",20)
                .attr("dy",2)
                .on("mouseover",function(d,i){
                    d3.select(this)
                        .attr("fill","red");

                })
                .on("mouseout",function(d){
                    d3.select(this)
                        .transition()
                        .duration(400)
                        .attr("fill","black");
                });
                Group.append("text")
                    .text(function (d) {
                        return d.rank;
                    })
                    .attr("class","ranknum")
                    .attr("dy",2);


            Group.attr("transform",function (d,i) {
                    return "translate(" + 0+ "," + (0) + ")";
                })
                .attr("fill","none")
                .transition()
                .delay(function(d,i){
                    return i * 200;
                })
                .duration(2000)
                .ease("elastic")
                .attr("fill","black")
                .attr("transform",function (d,i) {
                    return "translate(" + 10+ "," + (i*30+10) + ")";
                });

        },
        complete:function(){
            $("#loadingajax").hide();
            $("#secondtitle").text(goodstype3)
                    .show();
            $("#rank").find("a").attr("target","_blank")
        },

        dataType: "json"
    });
}




