var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var buahRouter = require('./routes/buah');
var usersRouter = require('./routes/users');
var pembayaranRouter = require('./routes/pembayaran');

var app = express();
// var app = express();

mongoose.connect('localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});
// mongoose.connect('localhost:27017/shopping');
// mongoose.connect('localhost:17017/shopping');

// view engine setup
app.engine('.hbs', expressHbs({
	defaultLayout: 'layout', 
	extname:'.hbs'}))
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/buah', buahRouter);
app.use('/users', usersRouter);
app.use('/pembayaran', pembayaranRouter);


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
