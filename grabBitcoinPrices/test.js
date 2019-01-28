const request = require("request");


request.get({url: "https://api.coindesk.com/v1/bpi/currentprice/INR.json"}, (err, res, body) => {
	if (err) {
		console.log(err);
	}
	console.log();
	body = JSON.parse(body);
	const INRPrice = body.bpi.INR.rate;
	console.log(INRPrice)
})