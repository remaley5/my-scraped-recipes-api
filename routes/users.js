var express = require('express');
var router = express.Router();
var userController = require('../database/controller/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Getting users');
  userController.getUsers().then(data => res.json(data));
});

router.post('/', (req, res) => {
  console.log("Posting User: ", req.body);
  userController.createUser(req.body.user).then(data => res.json(data));
});


// router.post('/', function(req, res, next) {
//   res.send('')
// })

module.exports = router;
