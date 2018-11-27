;(function(method){
    method(window,window.document,jQuery);
    //opts{
    //  count：总分  对应a个数为count*2
    //  info: 描述   对应分数的描述 应为数组[]
    //
    // }
}(function (win,doc,$){
    $.fn.scoreBar=function(obj,opts){
        var setting={
            parent:"score-row",

            width:16,
            height:21,
            //总分
            scoreCount:5,
            //评分容器
            scoreContent:"score",
            //评分描述
            scoreInfo:"score-info",
            //描述信息
            info:[
                "非常差",
                "差",
                "一般",
                "不是很好",
                "还好",
                "不错",
                "好",
                "非常好",
                "超级棒",
                "好极了"
            ]
        };
        options=$.extend({},setting,opts);
        console.log("."+options.parent);
        var stars=options.scoreCount*2;
        var width=options.width;
        var height=options.height;
        var starparent=obj.find("."+options.parent);      //父容器对象
        var scoreContent=obj.find("."+options.scoreContent);     //评分容器
        var infoContent=obj.find("."+options.scoreInfo);         //评分信息容器
        var info=options.info;
        var nowindex;
        starparent.css("width",width*stars).css("position","relative");
        for(i=0;i<stars;i++){
            var newSpan=$("<a href='javascript:void(0)'></a>");
            newSpan.css({"left":0,"width":width*(i+1),"height":height,"z-index":stars-i});
            newSpan.appendTo(starparent);
        }

        starparent.find("a").each(
            function (index, element) {
                $(this).click(function () {

                    nowindex=index;
                    sc(this,index);
                });
                $(this).mouseenter(function(){

                });


            }
        );

        function sc(obj,index) {
            var score=(index+1)/2;
            var msg=info[index];
            starparent.find("a").removeClass("clgib");
            $(obj).addClass("clgib");
            console.log(index);
            scoreContent.text(score+"分");
            infoContent.text(msg);
            console.log(msg);
        }

    }

}));

$.fn.scoreBar($("#scorebar"));