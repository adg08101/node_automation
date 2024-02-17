import express from 'express';
import { urlencoded, json } from 'body-parser';

var app = express();
var port = process.env.PORT || 3000;

// Converts an incoming request (POST-GET...) to a JSON object
app.use(urlencoded({ extended: false }));
app.use(json());

app.get('/', function (req, res) {
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
