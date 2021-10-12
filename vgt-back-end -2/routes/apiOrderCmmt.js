var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/ordercmmt', function(req, res, next) {
  req.mysql.query('select * from ordercmmt',[],
  function(err,result){
    res.send(JSON.stringify(result));
  }
  )
});

router.get('/vgtserver/ordercmmt/:orderid', function(req, res, next) {
  req.mysql.query('select * from ordercmmt where orderidset =?',[req.params.orderidset],
  function(err,result){
    res.send(JSON.stringify(result[0]));
  }
  )
});

router.post('/vgtserver/ordercmmt', function(req, res, next) {
  req.mysql.query('insert into `ordercmmt` (cmmtid, cmmtdesc, cmmtdate) values(?, ?, ?)',
  [req.body.cmmtid, req.body.cmmtdesc, req.body.cmmtdate],
  function(err,result){
    res.send(err);
  }
  )
});
router.put('/vgtserver/ordercmmt/', function(req, res, next) {
  req.mysql.query('update ordercmmt set cmmtid=? ,cmmtdesc=?  where orderidset =? ',
  [req.body.cmmtid, req.body.cmmtdesc,req.body.orderid,req.body.orderidset],
  function(err,result){
    res.send(err);
  }
  )
});
router.delete('/vgtserver/ordercmmt/:orderidset', function(req, res, next) {
  req.mysql.query('delete from ordercmmt where orderidset = ? ',
  [req.params.orderidset],
  function(err,result){
    res.send(err);
  }
  )
});

module.exports = router;
