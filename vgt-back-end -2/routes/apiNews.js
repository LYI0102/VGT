var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/vgtnews', function(req, res, next) {
  req.mysql.query('select * from vgtnews order by newsdate desc',[],
  
  function(err,result){
    res.send(JSON.stringify(result));
  }
  )
});

router.get('/vgtserver/vgtnews/:managerid', function(req, res, next) {
  req.mysql.query('select * from vgtnews',
  [req.params.managerid],
  
  function(err,result){
    res.send(JSON.stringify(result[0]));
  }
  )
});

router.post('/vgtserver/vgtnews', function(req, res, next) {
  req.mysql.query('insert into vgtnews (manangerid,newstitle, newsdesc  ) values(?, ?, ?)',
  [req.body.manangerid,req.body.newstitle, req.body.newsdesc, req.body.newsdate],
  
  function(err,result){
    res.send(err);
  }
  )
});

router.put('/vgtserver/vgtnews/', function(req, res, next) {
  req.mysql.query('update vgtnews set manangerid=?, newstitle=?, newsdesc=?   where newsid= ? ',
  [req.body.manangerid, req.body.newstitle, req.body.newsdesc, req.body.newsid],
  
  function(err,result){
    res.send(err);
  }
  )
});

router.delete('/vgtserver/vgtnews/:newsid', function(req, res, next) {
  req.mysql.query('delete from vgtnews where newsid=?',
  [req.params.newsid],
  
  function(err,result){
    res.send(err);
  }
  )
});

module.exports = router;
