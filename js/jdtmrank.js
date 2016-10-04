/**
 * Created by Administrator on 2016/5/15.
 */
var jsonParam=
{   "mall":0,
    "topId":"TR_MY",
    "typeId1":"毛衣",
    // "typeId2":"国产水果",
    "page":1,
    "length":20
};
var url="http://119.29.158.92/shunfeng/getAllGoods";

$.ajax({
    type: "GET",
    url: url,
    data: jsonParam,
    success:function(data){
       console.log(data);
       var circleR=8;
        data = data.goods;
        var svg = d3.select("body")
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
            .attr("dy",2);

        // Group.append("circle")
        //         .attr("r",circleR)
        Group.append("text")
                .text(function (d) {
                    return d.rank;
                })
                .attr("class","ranknum")
                .attr("dy",2);
    },
    dataType: "json"
});
