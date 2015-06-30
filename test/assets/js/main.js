window.twocan = {};

var updateTwocan = function(el){
    twocan[ el.attr("twocan-input") ] = el.val();
    $("*[twocan-output='"+ el.attr("twocan-input") +"']").text(el.val());
};

var serializeTwocan = function (){
    $("body").append("<div style='border:1px solid gray;'>"+ JSON.stringify(twocan, null, ' ') +"</div>");
};

//window.onpopstate = function (event) {
//  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
//};

var homepage = function(){
    console.log("home");
    $("body").stop().animate({"background-color": "white"}, 1000);
};
var page02 = function(){
    console.log("page02");
    $("body").stop().animate({"background-color": "blue"}, 1000);
};
var page03 = function(){
    console.log("page03");
    $("body").stop().animate({"background-color": "red"}, 1000);
};
var page04 = function(){
    console.log("page04");
    $("body").stop().animate({"background-color": "green"}, 1000);
};
var page404 = function(){
    console.log("page404");
    $("body").stop().animate({"background-color": "black"}, 1000);
};


$(document).ready(function()
{
    page('/test/',              homepage);
    page('/test/page02.html',   page02);
    page('/test/page03.html',   page03);
    page('/test/page04.html',   page04);
    page('*',                   page404);
    page();

    $("*[twocan-input]").each(function(index,value){
        updateTwocan( $(this) );
        $(this).keyup(function(){ updateTwocan( $(this) ); });
    });

    $("nav ul li a[twocan-link]").each(function(index, elem){
        $(this).click(function(e){
            $("body").removeClass("contentReloaded");
            $("body").addClass("reloadingContent");
            var tmplink = $(this).attr("href");
            var pagepath = "/test" + tmplink;
            var asyncLoad = $.get( pagepath )
                .done(function(data){
                    $("body").addClass("contentReloaded");
                    $("div[twocan-content]").html( $(data).find("div[twocan-content]").html() );
//                    window.history.pushState("string", $(data).find("title").text(), pagepath );
                    page( pagepath );

//                    var scriptpath = "/test/assets/js" + tmplink.replace(".html",".js");
//                    if(tmplink!=null && tmplink=="/") scriptpath =  "/test/assets/js/index.js";
//                    $.getScript( scriptpath )
//                        .done(function(){ console.log("script loaded"); })
//                        .fail(function(){ console.log("script NOT loaded"); });
                })
                .fail(function(){
//                  window.location = tmplink;
                    console.log("an error occured while loading page : should redirect to page instead of loading it");
                })
            .always(function(){
                $("body").removeClass("reloadingContent");
            });
            e.preventDefault();
        });
    });
});