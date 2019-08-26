const express = require('express');
const path= require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// get route for the sql database goes here
app.use('/api')


app.get('/eampless', function(req, res){
    res.send('What up yall')
})