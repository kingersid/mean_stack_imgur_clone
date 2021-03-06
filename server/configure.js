var path = require('path'),
    routes = require('./routes'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment'),
    multer = require('multer'),
    jade = require('jade'),
    cons = require('consolidate')

module.exports = function(app) {
    app.use(bodyParser.urlencoded({extnded:true}))
    app.use(morgan('dev'));
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));
    app.use('/public/', express.static(path.join(__dirname, '../public')));
    app.engine('html',cons.swig)
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine','html')
    routes(app);
    if ('development' === app.get('env')) {
       app.use(errorHandler());
    }
    return app;
};

