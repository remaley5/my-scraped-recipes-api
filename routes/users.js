var express = require('express');
var router = express.Router();
var userController = require('../database/controller/user.controller');

/* GET users listing. */
router.get('/all', function(req, res, next) {
  console.log('Getting users');
  userController.getUsers().then(data => res.json(data));
});

router.post('/signup', (req, res) => {
  console.log("Posting User: ", req.body);
  console.log('SIGNUP ROUTES: ', req.body.user);
  userController.createUser(res, req.body.user).then(data => data);
});

router.post('/login', (req, res) => {
  console.log("Logging in User :", req.body);
  userController.loginUser(res, req.body.user).then(data => data);
});


// router.post('/', function(req, res, next) {
//   res.send('')
// })

module.exports = router;
