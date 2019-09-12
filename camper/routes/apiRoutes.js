// route to the get api will go here.

/* eslint-disable indent */
/* eslint-disable camelcase */
const db = require("../models");
// const sessionChecker = require("./../public/G6-HTML/js/sessionChecker");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
      // =========== READ ==============
      // Get all 
      app.get('/', function (req, res) {
        res.send('Hello World');
      });
      app.get("/api/all-resources", function(req, res) {
        db.Resource.findAll().then(function(results) {
          res.json(results);
        });
      });
      // ========= Get Specific Type Of Resource ==========
      app.get("/api/resource/:type", function(req, res) {
        db.Resource.findAll({ where: { technology: req.params.type } }).then(function(
          results
          ) {
          console.log(res);
          res.json(results);
        });
      });
      //======= Get User =============
      app.get("/api/user/:user-id", function(req, res) {
        db.User.findOne({where: { name: req.params.name } }).then(function(results) {
          res.json(results);
        });
      });
      app.get("/api/recent-accessories", function(req, res) {
        db.Accessory.findAll({ order: ["updatedAt"], limit: 5 }).then(function(
          results
        ) {
          res.json(results);
        });
      });
      app.get("/api/user-accessories/:id", function(req, res) {
        db.Accessory.findOne({ where: { id: req.params.id } }).then(function(
          results
        ) {
          res.json(results);
        });
      });
      app.get("/api/user-accessories-ids/:id", function(req, res) {
        db.User_Accessory.findAll({ where: { user_id: req.params.id } }).then(
          function(results) {
            res.json(results);
          }
        );
      });
      // Get all hardware
      app.get("/api/all-hardware", function(req, res) {
        db.Hardware.findAll().then(function(results) {
          res.json(results);
        });
      });
      app.get("/api/recent-hardware", function(req, res) {
        db.Hardware.findAll({ order: ["updatedAt"], limit: 5 }).then(function(
          results
        ) {
          res.json(results);
        });
      });
      app.get("/api/user-hardware/:id", function(req, res) {
        db.Hardware.findOne({ where: { id: req.params.id } }).then(function(
          results
        ) {
          res.json(results);
        });
      });
      app.get("/api/user-hardware-ids/:id", function(req, res) {
        db.User_Hardware.findAll({ where: { user_id: req.params.id } }).then(
          function(results) {
            res.json(results);
          }
        );
      });
      // Get all software
      app.get("/api/all-software", function(req, res) {
        db.Software.findAll().then(function(results) {
          res.json(results);
        });
      });
      app.get("/api/recent-software", function(req, res) {
        db.Software.findAll({ order: ["updatedAt"], limit: 5 }).then(function(
          results
        ) {
          res.json(results);
        });
      });
      app.get("/api/user-software/:id", function(req, res) {
        db.Software.findOne({ where: { id: req.params.id } }).then(function(
          results
        ) {
          res.json(results);
        });
      });
      app.get("/api/user-software-ids/:id", function(req, res) {
        db.User_Software.findAll({ where: { user_id: req.params.id } }).then(
          function(results) {
            res.json(results);
          }
        );
      });
      app.get("/api/logout", (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
          res.clearCookie("user_sid");
          res.json("/");
        } else {
          res.json("/");
        }
      });
      // =========== UPDATE ==============
      // =========== DELETE ==============
      // Delete an example by id
      app.delete("/api/delete/user/:id", function(req, res) {
        db.User.destroy({ where: { id: req.params.id } }).then(function(
          dbExample
        ) {
          res.json(dbExample);
        });
      });
    };
