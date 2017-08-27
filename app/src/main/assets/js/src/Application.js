"use strict";
define(["posturl"], function(posturl){

	posturl = new posturl();

	var Application = function(){
		var div = document.createElement("div");
		div.innerHTML = "Privet!";
		Android.showToast("Privet");
		posturl.write("privet");
	};

	Application.prototype = {

	};

	return Application;

});