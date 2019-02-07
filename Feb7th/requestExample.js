var request = require("request");

request("https://tbtc.blockbook.api.openbazaar.org/", (err, res, body) =>{
	console.log(body.split("Last Block")[3].split(`data">`)[1].slice(0, 7))
});