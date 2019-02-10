#!/usr/bin/env node

var	json_mediainfo = require("./");

json_mediainfo('./stream.mp4', function(err, res) {
	if (err) {
		console.log(err);
	}else{
		console.log(JSON.stringify(res, null, 4));
	}
});
