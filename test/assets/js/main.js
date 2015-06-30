window.twocan = {};

var updateTwocan = function(el){
    var targ = el.attr("twocan-input");
    console.log( "targ = " + targ );
    console.log( "twocan[targ] = " + twocan[targ] );
    if ( twocan[targ]!=null ) el.val( twocan[targ] );
    twocan[ el.attr("twocan-input") ] = el.val();
    $("*[twocan-output='"+ el.attr("twocan-input") +"']").text(el.val());
};

var serializeTwocan = function (){
    $("body").append("<div style='border:1px solid gray;'>"+ JSON.stringify(twocan, null, ' ') +"</div>");
};

$(document).ready(function()
{
    $("nav ul li a[twocan-link]").each(function(index, elem)
    {
        var tmplink = $(this).attr("href");
        var pagepath = "/test" + tmplink;

        page( pagepath, function()
        {
            $("body").removeClass("contentReloaded");
            $("body").addClass("reloadingContent");

            var asyncLoad = $.get( pagepath )
                .done(function(data){
                    $("body").addClass("contentReloaded");
                    $("div[twocan-content]").html( $(data).find("div[twocan-content]").html() );

                    $("*[twocan-input]").each(function(index,value){
                        updateTwocan( $(this) );
                        $(this).keyup(function(){ updateTwocan( $(this) ); });
                    });
                })
                .fail(function(){
                    //window.location = tmplink;
                    console.log("an error occured while loading page : should redirect to page instead of loading it");
                })
                .always(function(){
                    $("body").removeClass("reloadingContent");
                });
        });

        $(this).click(function(e){
            $("body").removeClass("contentReloaded");
            $("body").addClass("reloadingContent");

            page( pagepath );
            e.preventDefault();
        });

    });

    page();
});