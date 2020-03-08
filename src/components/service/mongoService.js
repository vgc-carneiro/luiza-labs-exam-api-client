const mongodb = require('../../config/mongodb');
const Client = require('../model/Client');
const log = require('log4js').getLogger('mongoService');

async function tryConnectToMongo() {
	if(mongodb.checkState() !== 1) {
		await mongodb.connection();
	}
}

function getClient(data){
	return new Promise((resolve, reject) => {
		tryConnectToMongo().then(() => {
			Client.findOne(data).then((result) => {
				resolve(result);
			}, (error) => {
				log.error('getClient:', error);
				reject(error);
			});
		});
	});
}

module.exports = {getClient};