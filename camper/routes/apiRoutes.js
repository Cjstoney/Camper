var Sequelize = require("sequelize");
const db = require("../models");
// let Sequelize= require ('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // =========== READ ==============
  // Get all 
  app.get('/', function (req, res) {
    res.send('Hello World');
  });
  app.get("/api/all-resources", function (req, res) {
    db.Resource.findAll().then(function (results) {
      res.json(results);
    });
  });


  // ========= Get Specific Type Of Resource ==========
  app.get("/api/resource/:type", function (req, res) {
    db.Resource.findAll({ where: { technology: req.params.type } }).then(function (
      results
    ) {
      console.log(res);
      res.json(results);
    });
  });

  //======== get the saved resources ========
  app.get("/api/resources/saved", function (req, res) {
    console.log(req.body)
    db.User_Resource.findAll({
      include: [{model: db.User_Resource, as: 'r', required: true,}, ],
      attributes: [['r.id', 'r.id'],['r.technology', 'r.technology'],['r.description', 'r.description'],['r.url', 'r.url'],['r.imgurl', 'r.imgurl']],
      where: {[Op.and]: [{'$ur.user_id$': {[Op.eq]: 1}}]},
      })
      .then(function (results) {
      console.log(res)
      res.json(results)
      console.log('results', results)
    })
  })

  // ========= Get Resource via search ==========
  app.get("/api/resources/:search", function (req, res) {
    db.Resource.findAll({
      where: {
        [Op.or]: [
          {
            technology: {
              [Op.like]: "%" + req.params.search + "%"
            }
          },
          {
            tag: {
              [Op.like]: "%" + req.params.search + "%"
            }
          },
          {
            description: {
              [Op.like]: "%" + req.params.search + "%"
            }
          }
        ]
      }
    }).then(function (
      results
    ) {
      console.log(res);
      res.json(results);
    });
  });

  // ======== POST NEW USER ========
  app.post('/api/newuser', function (req, res) {
    console.log(req.body)
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      createdAt: req.body.createdAt
    }).then(user => {
      req.session.ser = user.dataVAlues;
      console.log("user added")
      res.redirect('/')
    }).catch(error => {
      res.send("Sorry we ran into an issue. Please try again in a few mintues.")
    })
  });

  //======= Get User =============
  app.get("/api/user/:email/:password", function (req, res) {
    console.log(req.params, 'req.body')
    db.User.findAll({where: {email: req.params.email, password: req.params.password}
    }).then(function (results) {
      res.json(results);
    })/*.catch(error =>{
      res.send('Sorry we have run into an issue. Please try again in a few minutes.')
    });*/
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
  app.delete("/api/delete/user/:id", function (req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
