var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var saltRounds = 10;

/* http://localhost:8000/Vgt/vgtserver/member */
router.get('/vgtserver/member', function (req, res, next) {
  req.mysql.query("select * from member ", [],
    function (err, result) {
      res.send(JSON.stringify(result));
    }

  )
});
// http://localhost:8000/Vgt/vgtserver/member/4
router.get('/vgtserver/member/:vgtid', function (req, res, next) {
  req.mysql.query("select * from member where vgtid = ?",
    [req.params.vgtid],

    function (err, result) {
      res.send(JSON.stringify(result[0]));
    }
  )
});
router.post('/vgtserver/member', function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
        console.log(err);
    };
    req.mysql.query("insert into member (vgtname, account, password, truename, birthdate, trueid, email, phone, auth, vgtpoint, vgtpassword, eval) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [req.body.vgtname, req.body.account,hash, req.body.truename, req.body.birthdate, req.body.trueid, req.body.email,
    req.body.phone, req.body.auth, req.body.vgtpoint, req.body.vgtpassword, req.body.eval],

    function (err, result) {
      res.send(err);
    }
  )
})




 
}


);
// router.put('/vgtserver/member', function (req, res, next) {

//   req.mysql.query("update member set vgtname=?, account=?, password=?, truename=?, birthdate=?, trueid=?, email=?, phone=?, auth=?, vgtpoint=?, vgtpassword=?, eval=?  where vgtid=?  ",
//   ["BigDip", "user1", "user1", "郭仕隆", "1995-01-05", "A125365610", "BigDip@gmail.com", "0952123548", 1, req.body.vgtpoint, "vgtuser1", null, 1],

//     function (err, result) {
//       res.send(err);
//     }
//   )
// });

router.put('/vgtserver/member', function (req, res, next) {

  req.mysql.query("update member set vgtname=?, account=?, password=?, truename=?, birthdate=?, trueid=?, email=?, phone=?, auth=?, vgtpoint=?, vgtpassword=?, eval=?  where vgtid=?  ",
    [req.body.vgtname, req.body.account, req.body.password, req.body.truename, req.body.birthdate, req.body.trueid, req.body.email,
    req.body.phone, req.body.auth, req.body.vgtpoint, req.body.vgtpassword, req.body.eval, req.body.vgtid],

    function (err, result) {
      res.send(err);
    }
  )
});
router.delete('/vgtserver/member/:vgtid', function (req, res, next) {
  req.mysql.query("delete from member where vgtid= ? ",
    [req.params.vgtid],

    function (err, result) {
      res.send(err);
    }
  )
});

// -----------------------------------------------------------------



router.put('/vgtserver/member/chpwd', function (req, res) {
  var password = req.body.password;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (hash) {
      console.log(hash);
    }
  })
  req.mysql.query("update member set password=?  where vgtid=? ",
    [hash, 1],
    function (err, result) {
      res.send(err);
    })
});

router.put('/vgtserver/member/chinfo/:vgtid', function (req, res) {
  req.mysql.query("update member set vgtname=?, truename=?, email=?, phone=? where vgtid=? ",
    [req.body.vgtname, req.body.truename, req.body.email, req.body.phone, req.body.vgtid],
    function (err, result) {
      res.send(err);
    }
  )
});

module.exports = router;
