function title(){
	var request = new XMLHttpRequest();
	request.open('GET', 'include/logo.html', true);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var header = request.responseText;
			document.getElementById('logo').innerHTML = header;
		}
	};
	request.send();
}

function menu(){
	var request = new XMLHttpRequest();
	request.open('GET', 'include/topMenu.html', true);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var header = request.responseText;
			document.getElementById('topMenu').innerHTML = header;
		}
	};
	request.send();
}

function addFromInclude(objStrName){
	const str = "include/";
	const strEnd = ".html";
	fullStr = concat(str, objStrName, strEnd);
var request = new XMLHttpRequest();
	request.open('GET', fullStr, true);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var header = request.responseText;
			document.getElementById(concat(objStrName, strEnd)).innerHTML = header;
		}
	};
	request.send();
}