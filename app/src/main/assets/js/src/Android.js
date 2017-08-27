"use strict";
define(function(){

	var Android = function(){

	};

	Android.prototype = {
		showToast : function(toast){
			console.warn("Android: toast:", toast);
		},
		makeNotification : function(title, content){
			console.warn("Android: notification:", title, content);
		}
	};

	return Android;

});