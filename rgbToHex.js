function rgb(r, g, b){
  r = (r>255) ? r = 255 : r=r;
  r = (r<0) ? r = 0 : r=r;

  g = (g>255) ? g = 255 : g=g;
  g = (g<0) ? g = 0 : g=g;

  b = (b>255) ? b = 255 : b=b;
  b = (b<0) ? b = 0 : b=b;

  r = r.toString(16).toUpperCase();
  g = g.toString(16).toUpperCase();
  b = b.toString(16).toUpperCase();
  var arr = [r,g,b];
  for(var i=0; i < arr.length; i++){
  	if(arr[i].length <= 1){
  		arr[i] += "0";
  	}
  }
  return arr[0]+arr[1]+arr[2];
}

console.log(rgb(255,255,255));
console.log(rgb(148, 0, 211));
console.log(rgb(0,0,0));