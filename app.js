require('./src/config/log');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/config/swagger.json');
const cors = require('cors');
const mongodb = require('./src/config/mongodb');
const env = require('./src/config/env');

const clientRoute = require('./src/components/routes/clientRoute');

const app = express();

mongodb.connection();

app.set('view engine', 'ejs');

if (env.app.env != 'prod') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(cors());

app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(swaggerDocument));

app.use('/', clientRoute);

// error handler
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.json({error: "Request is not valid"});
});

module.exports = app;
