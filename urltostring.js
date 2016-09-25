function domainName(url){
	url = url.replace(/www.|https:\/\/|http:\/\//gi, "");
	var arr = url.split("");
	for(var i=0; i < arr.length; i++){
		if(arr[i] == '.'){			
			url = url.substring(0, i);
			return url;
		}
	}	
}

console.log(domainName("https://www.codewars.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://github.com/carbonfive/raygun") );