const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/order', function (req, res, next) {
  req.mysql.query("select * from `order`", [],
    function (err, result) {
      res.send(JSON.stringify(result));
    }

  )
});

router.get('/vgtserver/order/:orderid',function(req,res,next){
req.mysql.query("select * from `order` where orderid= ?",
[req.params.orderid],
function(err,result){
  res.send(JSON.stringify(result[0]));
}
)
});

router.post('/vgtserver/order',function(req,res,next){
req.mysql.query("insert into `order` (buyerid, productid, orderstate, charactername, characterdesc, ordereval,orderevalcmmt ) values (?, ?, ?, ?, ?, ?, ?)",
[req.body.buyerid,req.body.productid,req.body.orderstate,req.body.charactername,req.body.characterdesc,req.body.ordereval ,req.body.orderevalcmmt],
function(err,result){
  res.send(err)

}
)
});

router.put('/vgtserver/order',function(req,res,next){
req.mysql.query('update `order` set buyerid=?, productid=?, orderstate=?, charactername=?, characterdesc=?,ordereval=?, orderevalcmmt=?  where orderid = ?',
[req.body.buyerid,req.body.productid,req.body.orderstate,req.body.charactername,req.body.characterdesc,req.body.ordereval, req.body.orderevalcmmt, req.body.orderid],
function(err,result){
  res.send(err)
}
)
});

router.delete('/vgtserver/order/:orderid', function (req, res, next) {
  req.mysql.query("delete from `order` where orderid = ? ", [req.params.orderid],
    function (err, result) {
      res.send(err);
    }

  )
});
module.exports = router;
