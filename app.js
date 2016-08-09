var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


 

var routes = require('./routes/index');
var users = require('./routes/users');
var db = require('./dbnode');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var user = require('./models/movie');
var express = require('express');


function createData(req, res){

var userr = new user(req.body);

  userr.save(function(err) {
    if (err) {
      return res.send(err);
    }
	res.render('users/userlist');
console.log("user registered successfully.");
});
}

function loginuser(req, res){
console.log("user login");
}
function alluser(req, res){
 user.find(function(err, movies) {
    if (err) {
      return res.send(err);
    }
    res.json(movies);
  });
console.log("Display all users.");
}
// Remove data from the collection
function deleteDatass(req, res){
  var idd = req.params.id;
 user.findOneAndRemove({ _id: idd }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
  }
  passport.use(new LocalStrategy(
  function(email, password, done) {
    user.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
  
  app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/createData', createData);   // create data --> input to collection
app.get('/userData', alluser); 
app.delete('/deleteData/:id', deleteDatass); 
 app.post('/login',
  passport.authenticate('local',{successRedirect:'/',failureRedirect:'ShowOrders/show_orders'}),
  function(req, res) {
  console.log("hi");
    res.redirect('users/userlist');
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
