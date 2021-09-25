
function addFromInclude(objStrName){
	if(objStrName == "logo"){
		const str = "https://commonanomalies.github.io/fid/blackgoose/images/blackgoose";
		const strEnd = ".png";
	}
	else{
		const str = "https://commonanomalies.github.io/fid/blackgoose/include/";
		const strEnd = ".html";
	}
	
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

