require('dotenv').config();
var cookieParser = require('cookie-parser');
const express = require('express');
const path= require('path');
var session = require('express-session');


const PORT = process.env.PORT || 3001;
const app = express();
// app.use(express.static(_dirname+"/public"))
// const apiRoutes = require('./routes/apiRoutes');
const db = require('./models');

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use(session({
  key:'user_sid',
  secret:'somerandomstuff',
  resave:false, 
  saveUninitialized: false,
  cookie:{
    expires: 600000
  }
}));

app.use((req, res, next)=>{
  if(req.cookies.user && !req.session.user){
    res.clearCookie('user_sid')
  }
  next();
})

var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
      res.redirect('/');
  } else {
      next();
  }    
};

var syncOptions = { force: false};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


// Routes
// ======================================
require('./routes/apiRoutes')(app);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
