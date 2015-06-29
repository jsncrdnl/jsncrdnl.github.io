window.twocan = {};

var updateTwocan = function(el){
    twocan[ el.attr("twocan-input") ] = el.val();
    $("*[twocan-output='"+ el.attr("twocan-input") +"']").text(el.val());
};

var serializeTwocan = function (){
    $("body").append("<div style='border:1px solid gray;'>"+ JSON.stringify(twocan, null, ' ') +"</div>");
};

$(document).ready(function()
{
    $("*[twocan-input]").each(function(index,value){
        updateTwocan( $(this) );
        $(this).keyup(function(){ updateTwocan( $(this) ); });
    });

    $("nav ul li a[twocan-link]").each(function(index, elem){
        $(this).click(function(e){
            $("body").removeClass("contentReloaded");
            $("body").addClass("reloadingContent");
            var tmplink = $(this).attr("href");
            var asyncLoad = $.get( "/test" + tmplink )
                .done(function(data){
                    $("body").addClass("contentReloaded");
                    $("div[twocan-content]").html( $(data).find("div[twocan-content]").html() );
                    window.history.pushState("string", $(data).find("title").text(), tmplink );

                    var scriptpath = "/test/assets/js"+replaceAll(/.html/g,".js",tmplink);
                    if(tmplink!=null && tmplink=="/") scriptpath =  "/test/assets/js/main.js";
                    $.getScript( "/test/assets/js"+replaceAll(/.html/g,".js",tmplink) )
                        .done(function(){ console.log("script loaded"); })
                        .fail(function(){ console.log("script NOT loaded"); });
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