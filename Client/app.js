var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var db = require('./infra/db');
var userDB = require('./models/users');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var errorRouter = require('./routes/404');
var blankRouter = require('./routes/blank');
var registerRouter = require('./routes/register');
var forgotPasswordRouter = require('./routes/forgot-password');
var chartsRouter = require('./routes/charts');
var tablesRouter = require('./routes/tables');

var app = express();

// test database

// db.createDBStructure();
let user = {
  nome: "Alex Abreu Louzada",
  tipo_usuario: "1",
  email: "alexlouzada2009@gmail.com",
  password: "alex11021998"
};
user = userDB.createUserObject(user);

userDB.loginUser(user);

console.log(user.nome);
console.log(user.tipo_usuario);
console.log(user.email);
console.log(user.password);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/index', indexRouter);
app.use('/', loginRouter);
app.use('/404', errorRouter);
app.use('/blank', blankRouter);
app.use('/register', registerRouter);
app.use('/forgot-password', forgotPasswordRouter);
app.use('/tables', tablesRouter);
app.use('/charts', chartsRouter);

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
  res.render('404');
});

module.exports = app;
