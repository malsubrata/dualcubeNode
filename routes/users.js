var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* Post users listing. */

//Insert User
router.post('/', function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err, user) {
        if (err) {
            return next(err);
        }
        res.json(user);
    })
});

// Get All Users
router.get('/', function (req, res, next) {
    User.find(function (err, users) {
        if (err) {
            return next(err);
        }
        res.json(users);
    });
});

module.exports = router;
