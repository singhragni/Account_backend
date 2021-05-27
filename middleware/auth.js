const passport = require("passport");
const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");
const { User } = require("../models/user");



const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "678ghggfdfgh78899987788999889999999",
};

passport.use(
  new JwtStrategy(jwtOptions, function (jwt_payload, done) {
    console.log(jwt_payload);
    User.findOne(
      { _id: jwt_payload.user._id, deletedAt: null },
      function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          //console.log(user);
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      }
    );
  })
);

module.exports = passport.authenticate("jwt", { session: false });