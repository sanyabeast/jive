"use strict";
define(function(){

	var Android = function(){

	};

	Android.prototype = {
		showToast : function(toast){
			alert(toast);
		}
	};

	return Android;

});