"use strict";
define(["posturl"], function(posturl){

	posturl = new posturl();

	var Application = function(){
		this.rootElement = document.querySelector("#main");
		this.resize();

		var inputs = this.inputs = document.querySelectorAll("input");

		for (var a = 0; a < inputs.length; a++){
			if (localStorage.getItem(inputs[a].name)){
				inputs[a].value = localStorage.getItem(inputs[a].name);
			}
			inputs[a].addEventListener("input", function(evt){
				localStorage.setItem(this.name, this.value);
			}.bind(inputs[a]));
		}
		
		this.price = document.querySelector("#info .price");
		this.button = document.querySelector(".button");

		this.button.addEventListener("touchstart", function(){
			this.price.innerText = Math.floor(Math.random() * 20000) / 100;
			Droid.makeNotification({
				title : "Драйвер",
				content : "Тест:" + this.inputs[0].value + "; " + this.inputs[1].value,
				ticker : "Тестовое сообщение"
			})
		}.bind(this));
		
		window.addEventListener("orientationchange", this.resize.bind(this));
		window.addEventListener("resize", this.resize.bind(this));

		this.rootElement.classList.remove("hidden");


	};

	Application.prototype = {
		resize : function(){
			Droid.log("~~~~~~~~~~~~~~" + window.innerHeight, window.devicePixelRatio);
			this.rootElement.style.fontSize = (window.innerHeight) / (1920) + "px";
		},
	};

	return Application;

});