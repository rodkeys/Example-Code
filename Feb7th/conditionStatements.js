var myGlobal = 10;
var oopsGlobal = 5;

var fun2 = function() {
	var output = "";

	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

fun2();


