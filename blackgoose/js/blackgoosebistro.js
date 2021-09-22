function title(){
	var request = new XMLHttpRequest();
	request.open('GET', '../include/logo.html', true);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var header = request.responseText;
			document.getElementById('logo').innerHTML = header;
		}
	};
	request.send();
}

function menu(){
	
}