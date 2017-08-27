"use strict";
define(["posturl"], function(posturl){

	posturl = new posturl();

	var Application = function(){
		window.addEventListener("touchstart", function(){
			Android.showToast(Math.random());
			Android.makeNotification("privet", "hello");
		});

		Android.makeNotification("privet", "hello");
	};

	Application.prototype = {

	};

	return Application;

});