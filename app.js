const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

global.__rootpath = path.resolve(__dirname);

const indexRouter = require('./routes/index'); // entry points for rendering various frontend applications
const apiRouter = require('./routes/api'); // backend api

const app = express();

// view engine setup
app.set('views', path.join(__rootpath, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__rootpath, 'public'))); // TODO: need multiple static directories for each frontend app?  or just one?

// react static directories (the second line is to get registerServiceWorker.js to work)
app.use('/static', express.static(path.join(__rootpath, 'react/build/static')));
app.use('/static', express.static(path.join(__rootpath, 'react/build')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
