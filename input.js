var readline = require('readline');
var google = require('googleapis');
var urlshortener = google.urlshortener('v1');
var http = require('http');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type in a url to shorten ', function(ans){
	var keys = "AIzaSyCZdy7xfot1zDIQ161EGYWSQOJT17Fcwb0";

	var more = ans.split(" ");

	if(more[1] === '-l') {
		var params = { key:keys, shortUrl: ans};
		urlshortener.url.get(params, function (err, response) {
			  if (err) {
			    console.log('Encountered error', err);
			  } else {
			    console.log('The long url is ', response);
			  }
		});
		rl.close();
	}

	


});
