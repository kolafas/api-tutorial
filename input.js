var readline = require('readline');
var google = require('googleapis');
var googl = require('goo.gl');
var urlshortener = google.urlshortener('v1');
var http = require('http');
googl.setKey('AIzaSyCZdy7xfot1zDIQ161EGYWSQOJT17Fcwb0');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type in a url to shorten ', function(ans){

	var more = ans.split(" ");
	if(more[1] === "-s"){
		googl.shorten(more[0])
		    .then(function (shortUrl) {
		        console.log(shortUrl);
		    })
		    .catch(function (err) {
		        console.error(err.message);
	    });
		rl.close();
	}else if(more[1] === '-l'){
		googl.expand(more[0])
		    .then(function (longUrl) {
		        console.log(longUrl);
		    })
		    .catch(function (err) {
		        console.error(err.message);
		    });
		rl.close();
	}else{
		console.log("return a valid argument e.g http://google.com -s or -l");
	}
});