var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

var app = express();
var port = process.env.PORT || 3000;

const animalSchema = mongoose.model('animal', new mongoose.Schema({
	type: String,
	status: String
}))

// Converts an incoming request (POST-GET...) to a JSON object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://adg08101:adg08101@moon:27017/animals?authSource=admin')

app.get('/', async (_req, res) => {
	const animals = await animalSchema.find();
	console.log('listing...')
	res.status(200).send({
		message: `listing ${animals}...`
	});
});

app.get('/create', async (_req, res) => {
	await animalSchema.create({ type: 'Pig', status: 'Happy' })
	console.log('creating...')
	res.status(200).send({
		message: `creating animal... ok`
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
