
require('dotenv').config();
const createError = require('http-errors');
      express = require('express');
      path = require('path');
      cookieParser = require('cookie-parser');
      logger = require('morgan');
      expressLayouts = require('express-ejs-layouts');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/airports');
      
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("layout extractScripts", true); // This is to extract all script tags and place them wherever you like
app.set("layout extractStyles",  true); // This is to extract all style tags and place them wherever you like

app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/airports', usersRouter);

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
