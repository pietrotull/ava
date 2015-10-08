var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};


router.post('/article',function (req, res, next) {

  var article = new Article(req.body);
  console.log('req.b:', article);
  article.save(function (err) {
    if (err) {
      console.error('failed to save article');
      res.status(500, 'failed to save');
    } else {
      res.json(article);
    }
  });
});

router.get('/', function (req, res, next) {
  console.log('jes');

  Article.find(function (err, articles) {
    console.log ('art:', articles);
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
