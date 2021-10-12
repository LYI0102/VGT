var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/vgtrecord', function(req, res, next) {
 req.mysql.query("select * from vgtrecord ",[],
 
 function(err,result){
  res.send(JSON.stringify(result));

 }
 )
});
router.get('/vgtserver/vgtrecord/:recordid', function(req, res, next) {
  req.mysql.query("select * from vgtrecord  where recordid=?",
  [req.params.recordid],
  
  function(err,result){
   res.send(JSON.stringify(result[0]));
 
  }
  )
 });
 router.post('/vgtserver/vgtrecord/', function(req, res, next) {
  req.mysql.query("insert into vgtrecord (price, type, date) values(?,?, ?)",
  [req.body.price,req.body.type,req.body.date],
  
  function(err,result){
   res.send("inser ok");
 
  }
  )
 });


 router.put('/vgtserver/vgtrecord/', function(req, res, next) {
  req.mysql.query("update vgtrecord set price=?, type=?, date=? where recordid=?",
  [req.body.price,req.body.type,req.body.date,req.body.recordid],
  
  function(err,result){
   res.send("update ok");
 
  }
  )
 });


 router.delete('/vgtserver/vgtrecord/:recordid', function(req, res, next) {
  req.mysql.query("delete  from vgtrecord  where recordid=?",
  [req.params.recordid],
  
  function(err,result){
   res.send(err);
 
  }
  )
 });
module.exports = router;
