"use strict";
define(["posturl"], function(posturl){

	posturl = new posturl();

	var Application = function(){

		var driver = document.querySelector("#driver");
		var input = driver.querySelector("input");

		input.value = localStorage.getItem("input-value") || "DRIVER";
		input.addEventListener("input", function(evt){
			localStorage.setItem("input-value", input.value);
		});


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