const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const user = require('./models/user');

module.exports = function(app) {

    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: process.env.JWT_SECRET
    }, async (payload, done) => {
        try {
            let user = app.models.schema.user;
            console.log(payload.email);
            user.find({ where: { email: payload.email } })
                .then((myuser) => {
                    if (!myuser) {
                        return done(null, false, { message: 'The user in the token was not found' });
                    }

                    return done(null, JSON.stringify(myuser));
                })
                .catch((err) => {
                    done(err, false);
                });

        } catch(err) {
            done(err, false);
        }
    }));

};
