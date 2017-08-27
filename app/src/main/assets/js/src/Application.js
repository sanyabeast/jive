"use strict";
define(["posturl"], function(posturl){

	posturl = new posturl();

	var Application = function(){
		var div = document.createElement("div");
		div.innerHTML = "Hello!";
		document.body.appendChild(div);
		Android.showToast("Hello");
		posturl.write("hello", { timiestamp : +new Date() });
	};

	Application.prototype = {

	};

	return Application;

});