function asyncFunction(callback){
	setTimeout(callback, 1000);
}
var functionHasResurned = false;
asyncFunction(function(){
	console.assert(functionHasResurned);
});

functionHasResurned = true;