"use strict";

requirejs.config({
	paths : {
		"posturl" : "../node_modules/postURL/posturl"
	},
});

requirejs(["Droid", "Application"], function(Droid, Application){
	window.Droid = new Droid();
	window.app = new Application();

});