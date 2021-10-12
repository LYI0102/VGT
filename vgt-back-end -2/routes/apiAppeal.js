var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/appeal', function(req, res, next) {
  req.mysql.query('select * from `appeal`',[],
  function(err,result){
    res.send(result);
  }
  )
});
router.get('/vgtserver/appeal/:appealid', function(req, res, next) {
  req.mysql.query('select * from appeal where appealid=? ',
  [req.params.appealid],
  function(err,result){
    res.send(result[0]);
  }
  )
});
router.post('/vgtserver/appeal/', function(req, res, next) {
  req.mysql.query('insert into appeal (appellantid, orderid, appealclass, appealdesc, appealdate, appealimg) values(?, ?, ?, ?, ?, ?) ',
  [req.body.appellantid,req.body.orderid,req.body.appealclass,req.body.appealdesc,req.body.appealdate,req.body.appealimg],
  function(err,result){
    res.send(err);
  }
  )
});
// http://localhost:3000/Vgt/vgtserver/appeal/${id}
router.post('/vgtserver/appealrply/:appealid', function(req, res, next) {
  req.mysql.query('select * from appealrply where appealid=? ',
  [req.params.appealid],
  function(err,result){
    res.send(result);
  }
  )
});

router.put('/vgtserver/appeal/', function(req, res, next) {
  req.mysql.query('update  appeal set appealstate=? where appealid=? ',
  ["已回覆",req.body.appealid],
  function(err,result){
    res.send(err);
  }
  )
});




router.delete('/vgtserver/appeal/:appealid', function(req, res, next) {
  req.mysql.query('delete  from `appeal` where appealid=?',[req.params.appealid],
  function(err,result){
    res.send(err);
  }
  )
});






module.exports = router;
