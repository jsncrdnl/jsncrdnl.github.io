// USAGE NOTES
// -----------
// twocan-input (1)
// twocan-output (2)
// twocan-content (3)
// body.reloadingContent (4)
// body.contentReloaded (5)
// -----------
// 1 - data source must have tag "twocan-input" equal to a variable name, i.e. twocan-input='myVar'
// 2 - data bind must is made using a "twocan-output" tag equal to the variable name, i.e. twocan-output='myVar'
// 3 - only the container with tag "twocan-content" will be async loaded/replaced
// 4 - This class will be added to the body during the async loaded of the content
// 5 - This class is added when the async content is loaded

// SAMPLE UPDATE CONTENT
// {
//      "index": { "mysecret": "aaaaaa", "test01": "bbbbb" },
//      "page02": { "mysecret": "dddddddd" },
//      "page03": { "txtMsg": "Ceci est une zone de texte ...." }
// }

var ckeditor_placeholder = '<span id="ckEditorPlaceholder"></span>';
var admin_html = '<button id="uConn">ADMIN</button><input id="uName" /><input id="uPass" />';

window.pagepath = "index";
window.twocan = {};

var refreshTwocan = function(el){
    pagepath = window.location.pathname.replace(/\//g,"").replace(/.html/g, "");
    if(pagepath=="") pagepath = "index";
    if( twocan[ pagepath ]==null ) twocan[ pagepath ] = {};
    var targ = el.attr("twocan-input");
    if ( twocan[pagepath][targ]!=null ) el.val( twocan[pagepath][targ] );
    updateTwocan(el);
};
var updateTwocan = function(el){
    twocan[pagepath][ el.attr("twocan-input") ] = el.val();
    $("*[twocan-output='"+ el.attr("twocan-input") +"']").text(el.val());
};

var serializeTwocan = function (){
    $("body").append("<div style='border:1px solid gray;'>"+ JSON.stringify(twocan, null, ' ') +"</div>");
};

var sendUpdate = function(){
    $.ajax({
        method:         'POST',
        url:            "https://nodejs-jsncrdnl.rhcloud.com/twocancms",
        crossDomain:    true,
        data:   {
            content : twocan
        }
    }).done(function(data){
        console.log("SUCCESS");
        console.log(data);
    }).fail(function(data){
        console.log("FAIL");
        console.log(data);
    }).complete(function(data){
        console.log("COMPLETE");
        console.log(data);
    });
};

$(document).ready(function()
{
    
    $(body).append(ckeditor_placeholder);
    
    $("button[twocan-submit]").click(function(e){
        console.log("submit clicked");
        sendUpdate();
    });
    
    $("nav ul li a[twocan-link]").each(function(index, elem)
    {
        var tmplink = $(this).attr("href");
        var pagepath = tmplink;

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
    
    
    ///////////////////////////////////////
//        $(".editableAware").each(function()
//        {
//            var pageName = window.location.pathname;
//            if(pageName=="/") pageName = "index";
//            else pageName = pageName.replace('.html', '').replace('/', '');
//            var constructedTargetPageContent = "content/"+pageName+"/"+$(this).attr("rel")+".html";
//            console.log("constructedTargetPageContent = " + constructedTargetPageContent);
//
//            $(this).html("<img src='assets/img/loading.gif' alt='Chargement en cours... ' />	");
//
//            $.ajax({
//                url : constructedTargetPageContent					
//            }).done(function(data){
//                var target = this.url.substring(this.url.lastIndexOf("/")+1,this.url.length-5);
//                $('div[rel="'+target+'"]').html(data);	
//                console.log( "url="+this.url+", target="+target+", rel=" + $('div[rel="'+target+'"]').attr("rel") + ", data="+ data );				
//            }).fail(function(jqXHR, textStatus){ 
//                var target = this.url.substring(this.url.lastIndexOf("/"),this.url.length-5);
//                $('div[rel="'+target+'"]').html("Impossible de charger le contenu de cette page.");
//                console.log( "Request failed: " + textStatus );
//            }).complete(function(){});
//        });
//        $(".colorSchemePicker").click(function()
//        {
//            var usernameInput 	= $("#uName").val();
//            var passwordInput 	= $("#uPass").val();
//            var colorScheme 	= "";
//            $(this).find("span").each(function(){
//                colorScheme += $(this).attr("rel") + "{" + 
//                    "background:" + $(this).css("background-color") + ";}";
//            });
//            $("#uColorScheme").val(colorScheme);
//
//            $.ajax
//            ({
//                url : "https://cherrypy-jsncrdnl.rhcloud.com/update_theme",
//                data : 	{ 	
//                            username:	usernameInput,
//                            password:	passwordInput,
//                            value:		colorScheme
//                        },
//                crossDomain: true,
//                method : "GET"
//            }).done(function(responseData, textStatus, jqXHR){
//                if ( responseData=="Success" )
//                {
//                    $("body").append("<style>"+colorScheme+"</style>");
//                    $("#colorSchemeMsg").text("Modifications enregistrées !");
//                    //setTimeout(function(){ window.location = "?"; }, 1500);
//                }
//                else
//                {
//                    $("#colorSchemeMsg")	.text( responseData );
//                }
//            }).fail(function(jqXHR, textStatus){ 
//                $("#colorSchemeMsg").text( "Une erreur inconnu est survenue lors de la tentative de connection." );
//                console.log( "Request failed: " + textStatus );
//            }).complete(function(){});
//
//
//            //$("#colorSchemeMsg").text();
//            //var background_2 = $(this).find("span:eq(1)").css("background-color");
//            //var back_target_2 = $(this).find("span:eq(1)").attr("rel");
//            //console.log("color scheme is " + background_1 + " ; " + background_2 );
//            //console.log("color target is " + back_target_1 + " ; " + back_target_2 );
//        });
//    });
    ////////////////////////////////////////////////////
    // CONNECT TO THE SERVICE //////////////////////////
    ////////////////////////////////////////////////////
    $("#uConn").click(function()
    {
//        $("#admin_credentials")	.css("display", "none");
//        $("#admin_loading")	.css("display", "inline");
//        $("#admin_logged_in")	.css("display", "none");
//        $("#admin_on")		.css("display", "none");
//        $("#admin_off")		.css("display", "inline");

        var usernameInput = "root";//$("#uName").val();
        var passwordInput = "secret";//$("#uPass").val();
        $.ajax
        ({
            url : "https://cherrypy-jsncrdnl.rhcloud.com/login",
            data : 	{ 	username:	usernameInput,
                        password:	passwordInput
                    },
            crossDomain: true,
            method : "GET"
        }).done(function(responseData, textStatus, jqXHR){
            if ( responseData=="Success" )
            {
//                $("#admin_credentials")	.css("display", "none");
//                $("#admin_loading")		.css("display", "none");
//                $("#admin_logged_in")	.css("display", "inline");
//                $("#admin_logged_msg")	.text("Vous êtes connecté en tant qu'administrateur !");
//                $("#admin_on")		.css("display", "inline");
//                $("#admin_off")		.css("display", "none");
                alert("connected");

                // On login success only
                CKEDITOR_BASEPATH="twocan/ckeditor/";
                $.getScript( "twocan/ckeditor/ckeditor.js" )
                  .done(function( script, textStatus ) {
                    console.log( textStatus );
                    $(".editableAware").attr("contenteditable", "true");
                  })
                  .fail(function( jqxhr, settings, exception ) {
                    console.log( "exception : " + exception );
                });
            }
            else
            {
                alert("failed : " + responseData);
//                $("#admin_credentials")	.css("display", "inline");
//                $("#admin_loading")		.css("display", "none");
//                $("#admin_logged_in")	.css("display", "none");
//                $("#admin_on")		.css("display", "none");
//                $("#admin_off")		.css("display", "inline");
//
//                $("#admin_msg").text( responseData );
            }
        }).fail(function(jqXHR, textStatus){ 
            alert("ERROR:: " + textStatus);
//            $("#admin_credentials")	.css("display", "inline");
//            $("#admin_loading")		.css("display", "none");
//            $("#admin_logged_in")	.css("display", "none");
//            $("#admin_msg").text( "Une erreur inconnu est survenue lors de la tentative de connection." );
//            $("#admin_on")		.css("display", "none");
//            $("#admin_off")		.css("display", "inline");
//            console.log( "Request failed: " + textStatus );
        }).complete(function(){});		
    });
    ////////////////////////////////////////////////////
    // SEND UPDATE /////////////////////////////////////
    ////////////////////////////////////////////////////
//		$("#uUpdate").click(function()
//		{
//			$("#admin_credentials")	.css("display", "none");
//			$("#admin_loading")		.css("display", "inline");
//			$("#admin_logged_in")	.css("display", "none");
//			
//			var usernameInput 	= $("#uName").val();
//			var passwordInput 	= $("#uPass").val();
//			var content 		= $(".editableAware").html();
//			var destinationFile	= $(".editableAware").attr("rel");
//			console.log("destinationFile = " + destinationFile);
//			
//			$.ajax
//			({
//				url : "https://cherrypy-jsncrdnl.rhcloud.com/update",
//				data : 	{ 	
//							username:	usernameInput,
//							password:	passwordInput,
//							value:		content
//						},
//				crossDomain: true,
//				method : "GET"
//			}).done(function(responseData, textStatus, jqXHR){
//				if ( responseData=="Success" )
//				{
//					$("#admin_credentials")	.css("display", "none");
//					$("#admin_loading")		.css("display", "none");
//					$("#admin_logged_in")	.css("display", "inline");
//					$("#admin_logged_msg")	.text("Modifications enregistrées ! Actualisation de la page ...");
//					
//					setTimeout(function(){ window.location = "?"; }, 1500);
//				}
//				else
//				{
//					$("#admin_credentials")	.css("display", "none");
//					$("#admin_loading")		.css("display", "none");
//					$("#admin_logged_in")	.css("display", "inline");
//					
//					$("#admin_logged_msg")	.text( responseData );
//				}
//			}).fail(function(jqXHR, textStatus){ 
//				$("#admin_credentials")	.css("display", "none");
//				$("#admin_loading")		.css("display", "none");
//				$("#admin_logged_in")	.css("display", "inline");
//				$("#admin_logged_msg").text( "Une erreur inconnu est survenue lors de la tentative de connection." );
//				console.log( "Request failed: " + textStatus );
//			}).complete(function(){});	
//        });
    ///////////////////////////////////////
    
    

    page();
});