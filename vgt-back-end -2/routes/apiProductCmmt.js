var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vgtserver/productcmmt', function(req, res, next) {
  req.mysql.query('select * from productcmmt ',[],
  function(err,result){
    res.send(JSON.stringify(result));

  }
  );
});

router.get('/vgtserver/productcmmt/:productid', function(req, res, next) {
  req.mysql.query('select * from productcmmt where productid=? ',
  [req.params.productid],
  function(err,result){
    res.send(JSON.stringify(result[0]));

  }
  );
});
router.post('/vgtserver/productcmmt', function(req, res, next) {
  req.mysql.query('insert into productcmmt (productid,cmmtid, cmmtauth, cmmtdesc) values (?,?, ?, ? ) ',
  [req.body.productid,req.body.cmmtid,req.body.cmmtauth,req.body.cmmtdesc],
  function(err,result){
    res.send(err);

  }
  );
});
router.put('/vgtserver/productcmmt/', function(req, res, next) {
  req.mysql.query('update productcmmt set cmmtid=?,cmmtauth=?, cmmtdesc=? where productid=? ',
  [req.body.cmmtid,req.body.cmmtauth,req.body.cmmtdesc,req.body.productid],
  function(err,result){
    res.send(err);

  }
  );
});
router.delete('/vgtserver/productcmmt/:cmmtid', function(req, res, next) {
  req.mysql.query('delete from productcmmt where cmmtid=? ',
  [req.params.cmmtid],
  function(err,result){
    res.send(err);

  }
  );
});

















module.exports = router;
