const log = require('log4js').getLogger('authService');
const http = require('http');
const env = require('../../config/env');

function doAuth(token){
	return new Promise((resolve, reject) => {
		if(!token){
			reject({code: 401, message: 'Token not found.'});
			return;
		}
		const options = {
			hostname: env.services.hostname,
			port: env.services.port,
			path: '/luiza-labs-exam/auth/' + token,
			method: 'GET'
		};
		const req = http.request(options, (res) => {
			if(res.statusCode != 200){
				reject({code: res.statusCode, message: res.statusMessage});
			}else{
				res.on('data', (d) => {
					let jsonAuth = JSON.parse(Buffer.from(d).toString());
					resolve(jsonAuth);
				});
			}
		});
		req.on('error', (e) => {
			log.error('getAuthorizationUniti.requisition:', e);
			reject({code: 500, message: e.message});
		});
		req.end();
	});
}

function authenticationMiddleware() {
	return function (req, res, next) {
		let answer = false;
		setTimeout(function () {
			if(!answer){
				res.status(504).json({message: 'Timeout'});
				answer = true;
			}
		}, 10000);
		let token = req.headers.token;
		doAuth(token).then((tokenResult) => {
			answer = true;
			req.params.user = tokenResult;
			return next();
		}, (response) => {
			if(answer){
				log.info('Timeout on auth.');
			}else{
				answer = true;
				res.status(response.code).json(response);
			}
		});
	};
}

module.exports = {authenticationMiddleware};