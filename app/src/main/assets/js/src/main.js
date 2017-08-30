"use strict";

requirejs.config({
	paths : {
		"posturl" : "../node_modules/postURL/posturl",
		"angular" : "../node_modules/angular/angular"
	},
});

requirejs(["Droid", "Application", "angular"], function(Droid, Application, angular){
	window.Droid = new Droid();
	window.app = new Application();

});