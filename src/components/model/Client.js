const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clietnDataSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	active: { type: Boolean, required: true },
	updatedAt: { type: Date, required: true },
	createdAt: { type: Date, required: true }
}, { collection: 'client' });
const Client = mongoose.model('Client', clietnDataSchema);
module.exports = Client;