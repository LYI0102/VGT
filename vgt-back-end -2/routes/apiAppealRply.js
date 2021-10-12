const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/appealrply', function(req, res, next) {
 req.mysql.query("select * from appealrply  join appeal on appeal.appealid = appealrply.appealid ",[],
 function(err,result){
   res.send(JSON.stringify(result));
 }
 )
});
router.get('/vgtserver/appeal', function(req, res, next) {
  req.mysql.query('select * from `appeal`',[],
  function(err,result){
    res.send(result);
  }
  )
});




router.get('/vgtserver/appealrply/:appealid', function(req, res, next) {
  req.mysql.query("select * from appealrply ",
  [req.params.appealid],
  function(err,result){
    res.send(JSON.stringify(result[0]));
  }
  )
 });

 router.post('/vgtserver/appealrply', function(req, res, next) {
  req.mysql.query("insert into appealrply(appealid, managerid, rplydesc ) values(?, ?, ?) ",
  [req.body.appealid,req.body.managerid,req.body.rplydesc],
  function(err,result){
    res.send(err);
  }
  )
 });
 router.put('/vgtserver/appealrply', function(req, res, next) {
  req.mysql.query("update appealrply set managerid=?, rplydesc=?, rplydate=?  where appealid=?",
  [req.body.managerid,req.body.rplydesc,req.body.rplydate,req.body.appealid],
  function(err,result){
    res.send(err);
  }
  )
 });

 router.delete('/vgtserver/appealrply/:rplyid', function(req, res, next) {
  req.mysql.query("delete from appealrply where rplyid= ? ",
  [req.params.rplyid],
  function(err,result){
    res.send(err);
  }
  )
 });
module.exports = router;
