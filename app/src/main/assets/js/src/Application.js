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


		driver.addEventListener("touchstart", function(){
			Droid.makeNotification({
				title : "Драйвер",
				content : "Тест: " + input.value,
				ticker : Math.random().toString()
			});
		});

	};

	Application.prototype = {

	};

	return Application;

});