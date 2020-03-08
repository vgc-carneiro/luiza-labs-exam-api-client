const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
	info: {
		title: 'Luiza Labs Exam',
		version: '1.0.0',
		description: 'Clients on MongoDB'
	},
	basePath: '/',
};

const options = {
	swaggerDefinition,
	apis: ['../components/**/*route.js'], // <-- not in the definition, but in the options
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;