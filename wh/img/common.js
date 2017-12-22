function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function isEmail(email) {
	var searchStr = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
	if (!searchStr.test(email)) {
		return false;
	}
	return true;
}
function isMobile(mobile) {
	var searchStr = /^((13|14|15|16|17|18)+\d{9})$/;
	if (!searchStr.test(mobile)) {
		return false;
	}
	return true;
}
function writeCookie(name, value, hours) {
	var expire = "";
	if (hours != null) {
		expire = new Date((new Date()).getTime() + hours * 3600 * 1000);
		expire = "; expires=" + expire.toGMTString();
	}
	document.cookie = name + "=" + escape(value) + expire + ";path=/";
}
function readCookie(name) {
	var cookieValue = "";
	var search = name + "=";
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1)
				end = document.cookie.length;
			cookieValue = unescape(document.cookie.substring(offset, end))
		}
	}
	return cookieValue;
}
var QueryString = function() {
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = pair[1];
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [ query_string[pair[0]], pair[1] ];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(pair[1]);
		}
	}
	return query_string;
}();