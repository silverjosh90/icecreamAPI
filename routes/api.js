var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */

function icecreams() {
  return knex('icecreams')
}

apiRouter.route('/icecreams')
  .get(function(req,res){
    icecreams().select().then(function(results){
      res.json(results)

    })
  })
  .post(function(req,res){
    console.log(req);
    console.log(data);
    icecreams().insert(req.body).then(function(results){
      res.json({message: 'ice cream created!'})
    })
  })

apiRouter.route('/icecreams/:icecreamsid')
    .get(function(req,res){
      icecreams().select().first().where('id',req.params.icecreamsid).then(function(results){
        res.json(results)
      })
    })
    .put(function(req,res){
      icecreams().update(req.body).where('id',req.params.icecreamsid).then(function(rest){
        res.json({message: 'Updated Ice Cream!'})
      })
    })
    .delete(function(req,res){
    icecreams().delete().where('id', req.params.icecreamsid).then(function(results) {
      res.json({message: "Ice Cream Deleted"})
    })
  });

module.exports = apiRouter;
