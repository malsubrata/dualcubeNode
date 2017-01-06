var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
/* GET home page. */
router.get('/', function (req, res, next) {
		User.find(function (err, users) {
        if (err) {
            return next(err);
        }
				if(users.length == 0 ) {
					res.redirect('/setup');
				}
				res.render('index', {title: 'Express'});
				
    });
    
});

router.get('/posts', function (req, res, next) {
    Post.find(function (err, posts) {
        if (err) {
            return next(err);
        }
        res.json(posts);
    });
});

router.post('/posts', function (req, res, next) {
    var post = new Post(req.body);
    post.save(function (err, post) {
        if (err) {
            return next(err);
        }
        res.json(post);
    })
});

router.post('/posts/:post/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post;

  comment.save(function(err, comment){
    if(err){ return next(err); }

    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if(err){ return next(err); }

      res.json(comment);
    });
  });
});

module.exports = router;
