require('dotenv').config();
const express = require('express');
const path= require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const db = require('./models');

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

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

/* // get route for the sql database goes here
app.use('/api')

app.get('/examples', function(req, res){
    res.send('What up yall')
}) */

module.exports = app;
