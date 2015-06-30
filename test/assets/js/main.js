// USAGE NOTES
// -----------
// twocan-input (1)
// twocan-output (2)
// twocan-content (3)
// -----------
// 1 - data source must have tag "twocan-input" equal to a variable name, i.e. twocan-input='myVar'
// 2 - data bind must is made using a "twocan-output" tag equal to the variable name, i.e. twocan-output='myVar'
// 3 - only the container with tag "twocan-content" will be async loaded/replaced

window.twocan = {};

var refreshTwocan = function(el){
    var targ = el.attr("twocan-input");
    if ( twocan[targ]!=null ) el.val( twocan[targ] );
    updateTwocan(el);
};
var updateTwocan = function(el){
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
                        refreshTwocan( $(this) );
                        $(this).keyup(function(){ updateTwocan( $(this) ); });
                        $(this).keydown(function(){ updateTwocan( $(this) ); });
                    });
                })
                .fail(function(){
                    window.location = tmplink;
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