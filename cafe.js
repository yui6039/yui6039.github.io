$(function($){
    $("#button1").on("click",function(){
        const concept=$(".concept_container").offset().top;
        $("html").animate({scrollTop:concept});
    });
})

$(function($){
    $("#button2").on("click",function(){
        const menu=$(".menu_container").offset().top;
        $("html").animate({scrollTop:menu});
    });
})

$(function($){
    $("#button3").on("click",function(){
        const news=$(".news_containter").offset().top;
        $("html").animate({scrollTop:news});
    });
})

$(function($){
    $("#button4").on("click",function(){
        const home=$(".header_container").offset().top;
        $("html").animate({scrollTop:home});
    });
})

$(function($){
    $("#button5").on("click",function(){
        const under_concept=$(".concept_container").offset().top;
        $("html").animate({scrollTop:under_concept});
    });
})

$(function($){
    $("#button6").on("click",function(){
        const under_menu=$(".menu_container").offset().top;
        $("html").animate({scrollTop:under_menu});
    });
})

$(function($){
    $("#button7").on("click",function(){
        const under_news=$(".news_containter").offset().top;
        $("html").animate({scrollTop:under_news});
    });
})



