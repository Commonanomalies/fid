
function addFromInclude(objStrName){
	const str = "include/";
	const strEnd = ".html";
	fullStr = str.concat(objStrName, strEnd);
	var request = new XMLHttpRequest();
	request.open('GET', fullStr, true);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var header = request.responseText;
			document.getElementById(objStrName).innerHTML = header;
		}
	};
	request.send();
}