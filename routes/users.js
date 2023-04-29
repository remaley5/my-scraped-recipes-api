const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userController = require('../database/controller/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  userController.getUsers().then(data => res.json(data));
});

router.post('/', function(req, res, next) {
  userController.saveUser().then(data => res.json(data));
});

module.exports = router;
