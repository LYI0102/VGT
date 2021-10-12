var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/vgtdiscount', function(req, res, next) {
 req.mysql.query("select * from vgtdiscount ",[],
 
 function(err,result){
  res.send(JSON.stringify(result));

 }
 )
});
router.get('/vgtserver/vgtdiscount/:discountid', function(req, res, next) {
  req.mysql.query("select * from vgtdiscount  where discountidid=?",
  [req.params.discountidid],
  
  function(err,result){
   res.send(JSON.stringify(result[0]));
 
  }
  )
 });
 router.post('/vgtserver/vgtdiscount/', function(req, res, next) {
  req.mysql.query("insert into vgtdiscount (vgtid,discountid, discountprice, discountorder, discountuse) values(?,?,?,?,?)",
  [req.body.vgtid,req.body.discountid,req.body.discountprice,req.body.discountorder,req.body.discountuse],
  
  function(err,result){
   res.send(err);
 
  }
  )
 });


 router.put('/vgtserver/vgtdiscount/', function(req, res, next) {
  req.mysql.query("update vgtdiscount set vgtid=?, discountprice=?, discountorder=?, discountuse=? where discountidid=?",
  [req.body.vgtid,req.body.discountprice,req.body.discountorder,req.body.discountuse,req.body.discountidid],
  
  function(err,result){
   res.send(err);
 
  }
  )
 });


 router.delete('/vgtserver/vgtdiscount/:discountidid', function(req, res, next) {
  req.mysql.query("delete  from vgtdiscount  where discountidid=?",
  [req.params.discountidid],
  
  function(err,result){
   res.send(err);
 
  }
  )
 });
module.exports = router;
