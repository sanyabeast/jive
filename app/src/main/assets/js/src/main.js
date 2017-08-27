"use strict";

requirejs.config({
	paths : {
		"posturl" : "../node_modules/postURL/posturl"
	},
});

requirejs(["Android", "Application"], function(Android, Application){
	if (typeof window.Android == "undefined") window.Android = new Android();
	window.app = new Application();

});