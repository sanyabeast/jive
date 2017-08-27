"use strict";
define(function(){

	var Android = function(){

	};

	Android.prototype = {
		showToast : function(toast){
			console.warn("Android: toast:", toast);
		}
	};

	return Android;

});