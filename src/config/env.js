const config = {
	app: {
		port: process.env.APP_PORT,
		env: process.env.APP_ENV
	},
	services: {
		hostname: process.env.SERVICE_HOSTNAME,
		port: process.env.SERVICE_PORT,
		type: process.env.SERVICE_TYPE
	}, 
	mongo: {
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT,
		db: process.env.MONGO_DB,
		user: process.env.MONGO_USER,
		pass: process.env.MONGO_PASS
	}
};

module.exports = config;