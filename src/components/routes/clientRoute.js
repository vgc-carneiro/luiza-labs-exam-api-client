const express = require('express');
const router = express.Router();
const log = require('log4js').getLogger('clientRoute');
const controller = require('../controller/clientController');
const authService = require('../service/authService');
 
router.get('/:id', authService.authenticationMiddleware(), function(req, res) {
	log.info('/', req.headers.token);
	log.info('/', req.params);
	controller.getClientById(req.params.id).then((result) => {
		res.status(200).send(result);
	}).catch((e) => {
		res.status(e.status).send(e.data);
	});
});

router.get('/email/:email', authService.authenticationMiddleware(), function(req, res) {
	log.info('/', req.headers.token);
	log.info('/', req.params);
	controller.getClientByEmail(req.params.email).then((result) => {
		res.status(200).send(result);
	}).catch((e) => {
		res.status(e.status).send(e.data);
	});
});

module.exports = router;