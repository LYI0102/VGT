var express = require('express');
var router = express.Router();

/* http://localhost:8000/Vgt/vgtserver/product/ */
router.get('/vgtserver/product', function(req, res, next) {
 req.mysql.query("select * from product ",[],
 function(err,result){
   res.send(JSON.stringify(result));
 }
 
)
});

router.get('/vgtserver/product/:productid', function(req, res, next) {
  req.mysql.query("select * from product where productid= ? ",
  [req.params.productid],
  function(err,result){
    res.send(JSON.stringify(result[0]));
  }
  
 )
 });

 router.post('/vgtserver/product/', function(req, res, next) {
  req.mysql.query("insert into product (vgtid, gamelist, gameserver, producttitle, productclass, productdesc, productquant, productimg, productprice,  producttoorder) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ",
  [req.body.vgtid,req.body.gamelist,req.body.gameserver,req.body.producttitle,req.body.productclass,
  req.body.productdesc,req.body.productquant,req.body.productimg,req.body.productprice,req.body.producttoorder],
  function(err,result){
    res.send(err);
  }
  
 )
 });
 
 router.put('/vgtserver/product/',function(req,res,next){
  req.mysql.query("update product set vgtid=?, gamelist=?,gameserver=?,producttitle=?,productclass=?,productdesc=?,productquant=?,productimg=?,productprice=?,producttoorder=? where productid=?  ",
  [req.body.vgtid,req.body.gamelist,req.body.gameserver,req.body.producttitle,req.body.productclass,
    req.body.productdesc,req.body.productquant,req.body.productimg,req.body.productprice,req.body.producttoorder,req.body.productid],
  function(err,result){
    res.send(err)
  }
  )
 })
router.delete('/vgtserver/product/:productid',function(req,res,next){
req.mysql.query("delete from product where productid =?",
[req.params.productid],
function(err,result){
  res.send(err)
}

)

})



module.exports = router;
