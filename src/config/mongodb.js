const mongoose = require('mongoose');
const env = require('./env');
const log = require('log4js').getLogger('mongodb');

module.exports = {
	checkState: () => {
		return mongoose.connection.readyState;
	},
	connection: () => {
		return new Promise((resolve, reject) => {
			try {
				const db = mongoose.connection;
				const urlConnection = `mongodb+srv://${env.mongo.user}:${env.mongo.pass}@${env.mongo.host}/${env.mongo.db}?retryWrites=true&w=majority`;
				mongoose.connect(urlConnection,{useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
					log.info('Connection with mongodb success!');
					return resolve(db);
				}).catch((e) => {
					log.error(`Connection with mongodb error! ${e}`);
					return reject(e);
				});
			} catch (e) {
				log.error(e);
				reject(e);
			}
		});
	}
};