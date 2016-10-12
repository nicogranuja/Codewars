"use strict";
function isBalanced(s, caps) {
	var answer = false;
	var arrayString = s.split("");
	var arrayCases = caps.split("");
	var j=0;
	var temp=0;
	for(var i=0; i < arrayString.length; i++){
		for(var k=0; k < arrayCases.length; k++){
			if(arrayCases[k] == arrayString[i]){
				
					
			}
		}
	}
	
	if(j == arrayCases.length)
		return true;
	else
		return false;
}

// isBalanced("(Sensei says yes!)", "()");

// console.log(isBalanced("(Sensei says yes!)", "()"));
console.log(isBalanced("(Sensei [says) no!]", "()[]"));