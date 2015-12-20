$(document).ready(function(){
    $(".js-hover").hover(function(){
        var jsFade =  $(this).find(".js-fade").fadeIn(500);
        var jsOpacity =  $(this).find(".js-change-opacity");
        var jsChangeBg = $(this).find(".js-change-bg");
        var jsChangeColor = $(this).find("js-change-color");
        var jsShow = $(this).find(".js-show");
        jsFade.fadeIn(500);
        jsOpacity.css("opacity","0.4");
        jsChangeBg.css("background","#3a454d");
        jsChangeColor.css("color","#fff");
        jsShow.show();
    },function(){
        var jsFade =  $(this).find(".js-fade").fadeIn(500);
        var jsOpacity =  $(this).find(".js-change-opacity");
        var jsChangeBg = $(this).find(".js-change-bg");
        var jsChangeColor = $(this).find("js-change-color");
        var jsShow = $(this).find(".js-show");
        jsFade.fadeOut(500);
        jsOpacity.css("opacity","1");
        jsChangeBg.css("background","#e1e6ea");
        jsChangeColor.css("color","#292f36");
        jsChangeColor.css("color","#8d8f92");
        jsShow.hide();
    });
});

