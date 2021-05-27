const bcrypt = require("bcrypt");
const { User,TeacherSchema } = require("../models/user");
const jwt = require("jsonwebtoken");


module.exports  = { 
    signUp : async (req, res) => {
        try{
          console.log("ragini");
          let hash = await bcrypt.hash(String(req.body.password),10);
          let newUser = new User({
            username: req.body.username,
            password: hash
          });
          const user = await User.collection.insertOne(newUser);
          console.log(user); 
          res.status(200).send({data:user});
        }
        catch(err){
          res.status(500).json({error: err.stack });
        }   
    },
    signIn : async (req, res) => {
      try {
        const user = await User.findOne({
          username: req.body.username,
          deletedAt: null,
        });
        if (!user) {
          res.status(404).json({ error: "User not found" });
        }
  
        const result = await bcrypt.compare(
          String(req.body.password),
          user.password
        );
        if (!result) {
          res.status(401).json({ error: "Password is incorrect" });
        }
  
        const token = jwt.sign({ user }, "678ghggfdfgh78899987788999889999999", {
          expiresIn: "1d",
        });
  
        res.status(200).json({ date: { jwt_token: token } });
      } catch (err) {
        res.status(500).json({ error: err.stack });
      }
    },

    getUser: async (req, res) => {
      try {
        console.log("ragg");
        res.status(200).json({ data: { user: req.user } });
      } catch (err) {
        res.status(500).json({ error: err.stack });
      }
    },
};