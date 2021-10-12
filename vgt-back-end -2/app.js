var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require("mysql");
var session = require('express-session');
var saltRounds = 10;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiMemberRouter = require('./routes/apiMember');
var apiProductRouter = require('./routes/apiProduct');
var apiOrderRouter = require('./routes/apiOrder');
var apiProductCmmtRouter = require('./routes/apiProductCmmt');
var apiAppealRouter = require('./routes/apiAppeal');
var apiOrderCmmtRouter = require('./routes/apiOrderCmmt');
var apiNewsRouter = require('./routes/apiNews');
var apiAppealRply = require('./routes/apiAppealRply');
var apiVgtrecord = require('./routes/apiVgtrecord');
var apiVgtdiscount = require('./routes/apiVgtdiscount');
var apilogin = require('./routes/apilogin');
var cors = require("cors")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors({
  origin: ["http://localhost:8000"],
  methods: ["GET", "POST","PUT","DELETE"],
  credentials: true
}

));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var mysql = require("mysql");

app.use(function(req,res,next){
  var mysql = require("mysql");
  var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"vgtdb"

  })
  connection.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
  });
req.mysql = connection;
next();
})
app.use(
  session({
      key: "vgtid",
      secret: "vgtSecret",
      resave: false,
      saveUninitialized: false,
      cookie: {
          expires:1000* 60 * 60 * 24,
      },
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Vgt', apiMemberRouter);
app.use('/Vgt', apiProductRouter);
app.use('/Vgt', apiOrderRouter);
app.use('/Vgt', apiProductCmmtRouter);
app.use('/Vgt', apiAppealRouter);
app.use('/Vgt', apiOrderCmmtRouter);
app.use('/Vgt', apiNewsRouter);
app.use('/Vgt', apiAppealRply);
app.use('/Vgt', apiVgtrecord);
app.use('/Vgt', apiVgtdiscount);
app.use('/Vgt', apilogin);

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
