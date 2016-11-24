// USAGE NOTES
// -----------
// plumenav-content (1)
// body.reloadingContent (2)
// body.contentReloaded (3)
// plumenav-link (4)
// plumenav-link.menuSelected (5)
// plumenav-script (6)
// -----------
// 1 - only the container with tag "plumenav-content" will be async loaded/replaced
// 2 - This class will be added to the body during the async loaded of the content
// 3 - This class is added when the async content is loaded
// 4 - The menu items which controls navigation
// 5 - A selected menu item (for styling)
// 6 - A block of script to load and run when async navigating

// SAMPLE UPDATE CONTENT
// <div>
// 	<h1>Title</h1>
//  <nav>
//    <ul>
//        <li><a plumenav-link href="page1.html">page1</a></li>
//        <li><a plumenav-link href="page2.html" class="currentPageMenuItem">page2</a></li>
//        <li><a plumenav-link href="page3.html">page3</a></li>
//    </ul>
//  </nav>
//  <div plumenav-content>
// 		<!-- THIS WILL BE REPLACED -->
//		<h2>Page X</h2>
//		<p>aaaaaa</p>
// 		<!-- THIS WILL BE UPLOADED -->
//	</div>
// </div>


window.pagepath = "index";
window.plumenav = {
    pages: {},
    config: {
        navDelay: 250, // in ms
        pagesExt: "html", // in ms
    },
};

/* ********************************************************** */
/* ********************** PAGE.JS *************************** */
/* ********************************************************** */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.page=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(c){"use strict";function m(a,b){if("function"==typeof a)return m("*",a);if("function"==typeof b)for(var c=new q(a),d=1;d<arguments.length;++d)m.callbacks.push(c.middleware(arguments[d]));else"string"==typeof a?m["string"==typeof b?"redirect":"show"](a,b):m.start(a)}function n(a){if(!a.handled){var b;b=k?i+f.hash.replace("#!",""):f.pathname+f.search,b!==a.canonicalPath&&(m.stop(),a.handled=!1,f.href=a.canonicalPath)}}function o(a){return"string"!=typeof a?a:h?decodeURIComponent(a.replace(/\+/g," ")):a}function p(a,b){"/"===a[0]&&0!==a.indexOf(i)&&(a=i+(k?"#!":"")+a);var c=a.indexOf("?");if(this.canonicalPath=a,this.path=a.replace(i,"")||"/",k&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=b||{},this.state.path=a,this.querystring=~c?o(a.slice(c+1)):"",this.pathname=o(~c?a.slice(0,c):a),this.params={},this.hash="",!k){if(!~this.path.indexOf("#"))return;var d=this.path.split("#");this.path=d[0],this.hash=o(d[1])||"",this.querystring=this.querystring.split("#")[0]}}function q(a,b){b=b||{},this.path="*"===a?"(.*)":a,this.method="GET",this.regexp=d(this.path,this.keys=[],b.sensitive,b.strict)}function s(a){if(1===t(a)&&!(a.metaKey||a.ctrlKey||a.shiftKey||a.defaultPrevented)){for(var b=a.target;b&&"A"!==b.nodeName;)b=b.parentNode;if(b&&"A"===b.nodeName&&!b.hasAttribute("download")&&"external"!==b.getAttribute("rel")){var d=b.getAttribute("href");if((k||b.pathname!==f.pathname||!b.hash&&"#"!==d)&&!(d&&d.indexOf("mailto:")>-1)&&!b.target&&u(b.href)){var e=b.pathname+b.search+(b.hash||"");"undefined"!=typeof c&&e.match(/^\/[a-zA-Z]:\//)&&(e=e.replace(/^\/[a-zA-Z]:\//,"/"));var g=e;0===e.indexOf(i)&&(e=e.substr(i.length)),k&&(e=e.replace("#!","")),i&&g===e||(a.preventDefault(),m.show(g))}}}}function t(a){return a=a||window.event,null===a.which?a.button:a.which}function u(a){var b=f.protocol+"//"+f.hostname;return f.port&&(b+=":"+f.port),a&&0===a.indexOf(b)}var d=a("path-to-regexp");b.exports=m;var j,l,e="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",f="undefined"!=typeof window&&(window.history.location||window.location),g=!0,h=!0,i="",k=!1;m.callbacks=[],m.exits=[],m.current="",m.len=0,m.base=function(a){return 0===arguments.length?i:void(i=a)},m.start=function(a){if(a=a||{},!j&&(j=!0,!1===a.dispatch&&(g=!1),!1===a.decodeURLComponents&&(h=!1),!1!==a.popstate&&window.addEventListener("popstate",r,!1),!1!==a.click&&document.addEventListener(e,s,!1),!0===a.hashbang&&(k=!0),g)){var b=k&&~f.hash.indexOf("#!")?f.hash.substr(2)+f.search:f.pathname+f.search+f.hash;m.replace(b,null,!0,g)}},m.stop=function(){j&&(m.current="",m.len=0,j=!1,document.removeEventListener(e,s,!1),window.removeEventListener("popstate",r,!1))},m.show=function(a,b,c,d){var e=new p(a,b);return m.current=e.path,!1!==c&&m.dispatch(e),!1!==e.handled&&!1!==d&&e.pushState(),e},m.back=function(a,b){m.len>0?(history.back(),m.len--):a?setTimeout(function(){m.show(a,b)}):setTimeout(function(){m.show(i,b)})},m.redirect=function(a,b){"string"==typeof a&&"string"==typeof b&&m(a,function(a){setTimeout(function(){m.replace(b)},0)}),"string"==typeof a&&"undefined"==typeof b&&setTimeout(function(){m.replace(a)},0)},m.replace=function(a,b,c,d){var e=new p(a,b);return m.current=e.path,e.init=c,e.save(),!1!==d&&m.dispatch(e),e},m.dispatch=function(a){function e(){var a=m.exits[d++];return a?void a(b,e):f()}function f(){var b=m.callbacks[c++];return a.path!==m.current?void(a.handled=!1):b?void b(a,f):n(a)}var b=l,c=0,d=0;l=a,b?e():f()},m.exit=function(a,b){if("function"==typeof a)return m.exit("*",a);for(var c=new q(a),d=1;d<arguments.length;++d)m.exits.push(c.middleware(arguments[d]))},m.Context=p,p.prototype.pushState=function(){m.len++,history.pushState(this.state,this.title,k&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},p.prototype.save=function(){history.replaceState(this.state,this.title,k&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},m.Route=q,q.prototype.middleware=function(a){var b=this;return function(c,d){return b.match(c.path,c.params)?a(c,d):void d()}},q.prototype.match=function(a,b){var c=this.keys,d=a.indexOf("?"),e=~d?a.slice(0,d):a,f=this.regexp.exec(decodeURIComponent(e));if(!f)return!1;for(var g=1,h=f.length;g<h;++g){var i=c[g-1],j=o(f[g]);void 0===j&&hasOwnProperty.call(b,i.name)||(b[i.name]=j)}return!0};var r=function(){var a=!1;if("undefined"!=typeof window)return"complete"===document.readyState?a=!0:window.addEventListener("load",function(){setTimeout(function(){a=!0},0)}),function(c){if(a)if(c.state){var d=c.state.path;m.replace(d,c.state)}else m.show(f.pathname+f.hash,void 0,void 0,!1)}}();m.sameOrigin=u}).call(this,a("_process"))},{_process:2,"path-to-regexp":3}],2:[function(a,b,c){function e(){}var d=b.exports={};d.nextTick=function(){var a="undefined"!=typeof window&&window.setImmediate,b="undefined"!=typeof window&&window.MutationObserver,c="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(a)return function(a){return window.setImmediate(a)};var d=[];if(b){var e=document.createElement("div"),f=new MutationObserver(function(){var a=d.slice();d.length=0,a.forEach(function(a){a()})});return f.observe(e,{attributes:!0}),function(b){d.length||e.setAttribute("yes","no"),d.push(b)}}return c?(window.addEventListener("message",function(a){var b=a.source;if((b===window||null===b)&&"process-tick"===a.data&&(a.stopPropagation(),d.length>0)){var c=d.shift();c()}},!0),function(b){d.push(b),window.postMessage("process-tick","*")}):function(b){setTimeout(b,0)}}(),d.title="browser",d.browser=!0,d.env={},d.argv=[],d.on=e,d.addListener=e,d.once=e,d.off=e,d.removeListener=e,d.removeAllListeners=e,d.emit=e,d.binding=function(a){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(a){throw new Error("process.chdir is not supported")}},{}],3:[function(a,b,c){function f(a){return a.replace(/([=!:$\/()])/g,"\\$1")}function g(a,b){return a.keys=b,a}function h(a){return a.sensitive?"":"i"}function i(a,b){var c=a.source.match(/\((?!\?)/g);if(c)for(var d=0;d<c.length;d++)b.push({name:d,delimiter:null,optional:!1,repeat:!1});return g(a,b)}function j(a,b,c){for(var d=[],e=0;e<a.length;e++)d.push(l(a[e],b,c).source);var f=new RegExp("(?:"+d.join("|")+")",h(c));return g(f,b)}function k(a,b){function d(a,d,e,g,h,i,j,k){if(d)return d;if(k)return"\\"+k;var l="+"===j||"*"===j,m="?"===j||"*"===j;return b.push({name:g||c++,delimiter:e||"/",optional:m,repeat:l}),e=e?"\\"+e:"",h=f(h||i||"[^"+(e||"\\/")+"]+?"),l&&(h=h+"(?:"+e+h+")*"),m?"(?:"+e+"("+h+"))?":e+"("+h+")"}var c=0;return a.replace(e,d)}function l(a,b,c){if(b=b||[],d(b)?c||(c={}):(c=b,b=[]),a instanceof RegExp)return i(a,b,c);if(d(a))return j(a,b,c);var e=c.strict,f=c.end!==!1,l=k(a,b),m="/"===a.charAt(a.length-1);return e||(l=(m?l.slice(0,-2):l)+"(?:\\/(?=$))?"),l+=f?"$":e&&m?"":"(?=\\/|$)",g(new RegExp("^"+l,h(c)),b)}var d=a("isarray");b.exports=l;var e=new RegExp(["(\\\\.)","([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?","([.+*?=^!:${}()[\\]|\\/])"].join("|"),"g")},{isarray:4}],4:[function(a,b,c){b.exports=Array.isArray||function(a){return"[object Array]"==Object.prototype.toString.call(a)}},{}]},{},[1])(1)});
/* ********************************************************** */



////////////////////////////////////////////////////
// TOOLS ///////////////////////////////////////////
////////////////////////////////////////////////////
// Create a standart page name
var parsePageName = function(url){
	var name = url;
	name = name.replace(/\//g,"").replace(/.html/g, "").replace(/.php/g, "");
    if(name=="") name = "index";
	return name;
};

////////////////////////////////////////////////////
// INIT ////////////////////////////////////////////
////////////////////////////////////////////////////
$(document).ready(function()
{
    pagepath = $(document)[0].URL;
    pagepath = pagepath.substr( pagepath.lastIndexOf("/"), 0 ).split('?')[0];
    if(pagepath=="")  pagepath = "index." + plumenav.config.pagesExt;

	initplumenavVariable();
	initplumenavContent();
    page();
    $('body').addClass('contentReloaded');
});

////////////////////////////////////////////////////
// INITITIALIZE GLOBAL VARIABLE ////////////////////
////////////////////////////////////////////////////
var initplumenavVariable = function()
{
    $("*[plumenav-link]").each(function(index, elem){
        if ( $(this).attr('href') == pagepath )
            $(this).addClass('menuSelected');
    });

	$("*[plumenav-content]").each(function(index,value){
		refreshplumenav( $(this) );
	});
};
////////////////////////////////////////////////////
// CREATE plumenav GLOBAL VARIABLE + update page ///
////////////////////////////////////////////////////
var refreshplumenav = function(el){
    pagepath = parsePageName(pagepath);
    if ( plumenav.pages[pagepath]==null ) 			plumenav.pages[ pagepath ] = {};
    if ( plumenav.pages[pagepath].content!=null )		el.html( plumenav.pages[pagepath].content );
    updateplumenav(el);
};
////////////////////////////////////////////////////
// UPDATE plumenav GLOBAL VARIABLE /////////////////
////////////////////////////////////////////////////
var updateplumenav = function(el){
	plumenav.pages[pagepath].content = el.html();
};
var bodyLoading = function()
{
    $("body").removeClass("contentReloaded");
    $("body").addClass("reloadingContent");
};
var bodyLoaded = function()
{
    $("body").removeClass("reloadingContent");
    setTimeout(function(){
        $("body").addClass("contentReloaded");
    }, plumenav.config.navDelay);
};
////////////////////////////////////////////////////
// CONTENT SCANNING AND INITIALIZATION /////////////
////////////////////////////////////////////////////
var initplumenavContent = function()
{
    $("*[plumenav-link]").each(function(index, elem)
    {
        page( $(this).attr("href"), function()
        {
            bodyLoading();

			if 		( parsePageName(window.location.pathname) == parsePageName(pagepath) )
			{
				console.log("page: already displayed");
                bodyLoaded();
			}
			else if ( plumenav.pages[parsePageName(pagepath)] != null )
			{
				console.log( "page: loaded from memory");
                $("*[plumenav-content]").html( plumenav.pages[parsePageName(pagepath)].content );
				refreshplumenav( $("*[plumenav-content]") );
                bodyLoaded();
			}
			else
			{
				var asyncLoad = $.get( pagepath )
					.done(function(data){
//                        console.log("data = ", $(data), $(data).filter("*[plumenav-content]"), $(data).filter("*[plumenav-content]").html());
						$("*[plumenav-content]").html( $(data).filter("*[plumenav-content]").html() );
						refreshplumenav( $("*[plumenav-content]") );
                        bodyLoaded();
					})
					.fail(function(event, request, settings){
						window.location = settings.url;
						console.log("an error occured while loading page : should redirect to page instead of loading it");
                        bodyLoaded();
					});
			}
        });

        $(this).click(function(e){
            var locallink = $(e.currentTarget).attr('href');

            bodyLoading();


			$("*[plumenav-link]").removeClass("menuSelected");
			$(this).addClass("menuSelected");

			pagepath = locallink;

            page( locallink );
            e.preventDefault();
        });

    });
};
