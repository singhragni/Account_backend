var express = require('express');
var router = express.Router();
// var {signUp}= require("../controllers/accounts");

const {signUp,signIn,getUser} = require("../controllers/accounts");

const authenticate = require("../middleware/auth");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.use('',function(req,res,next){
//     console.log("i am middle ");
//     next();
// })
router.post("/signUp",signUp);
router.post("/signIn",signIn);
router.get("/getUser",authenticate,getUser);


module.exports = router;
