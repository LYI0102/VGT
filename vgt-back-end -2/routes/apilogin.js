var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var saltRounds = 10;
router.post("/vgtserver/apiregister", (req, res) => {
    const vgtname = req.body.vgtname
    const account = req.body.account
    const password = req.body.password
    const truename = req.body.truename
    const birthdate = req.body.birthdate
    const trueid = req.body.trueid
    const email = req.body.email
    const phone = req.body.phone
    const vgtpoint = req.body.vgtpoint
    const vgtpassword = req.body.vgtpassword

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        };
        const sqlSelect = "INSERT INTO member (vgtname,account,password,truename,birthdate,trueid,email,phone,auth,vgtpoint,vgtpassword,eval) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        req.mysql.query(sqlSelect, [account, account, hash, truename, birthdate, trueid, email, phone, 1, 0, null, null],
        // db.query(sqlSelect, [account, account, hash, truename, birthdate, trueid, email, phone, 1, 0, hash, null],
            (err, result) => {
                console.log(err);
                res.send(err);
            })
    })

});

router.post("/vgtserver/apilogin", (req, res) => {
    const account = req.body.account
    const password = req.body.password
    const auth = req.body.auth
    const vgtpoint= req.body.vgtpoint
    const sqlSelect = "SELECT * FROM member WHERE account =?;"
    req.mysql.query(sqlSelect, account,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password,
                    (error, response) => {
                        if (response) {
                            req.session.user = result;
                            console.log(req.session.user);
                            res.send(req.session.user);
                        } else {
                            res.send({ message: "Wrong account/password combination!" })
                        }
                    })
            } else {
                res.send({ message: "User doesn't exist" })
            };

        });
});

router.get("/vgtserver/apilogin", (req, res) => {
    if (req.session.user) {
        console.log({ loggedIn: true, user: req.session.user });
        res.send(req.session.user);
    } else {
        console.log({ loggedIn: false })
    }
})

router.get("/vgtserver/apilogin/:vgtid", (req, res) => {

    const sqlSelect = "SELECT * FROM member WHERE vgtid = ?";
    req.mysql.query(sqlSelect, [req.params.vgtid], (err, result) => {
        console.log(err);
        res.send(result[0]);
    })
});




router.get('/vgtserver/apilogout', function (req, res) {
    res.clearCookie('vgtid');
    res.redirect('/FrontPage');

});

router.post('/vgtserver/apicreditCard',function(req,res,next){
    req.mysql.query('UPDATE member SET vgtpoint = ? WHERE vgtid = ?',
    [req.body.vgtpoint,req.body.vgtid],function(err,result){
        res.send(err);
    })
})

module.exports = router;