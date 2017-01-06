var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* Post users listing. */

//Insert User
router.get('/', function (req, res, next) {
  res.render('setup', {title: 'Setup'});
});

module.exports = router;
