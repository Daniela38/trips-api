import passport from 'passport';
import local from 'passport-local';
import usersModel from '../dao/models/users.model.js';
import jwt from 'passport-jwt';
import { createHash, isValidPassword, generateToken } from '../utils/utils.js';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const LocalStrategy = local.Strategy;

const initializePassport = () => {

    passport.use('register', new LocalStrategy(
        {passReqToCallback: true, usernameField: 'email'}, async (req, username, password, done) => {
            const {first_name, last_name, email, role} = req.body;
            if (!first_name || !last_name || !email) return res.status(400).send({status: "error"})
            try{
                let user = await usersModel.findOne({email: username});
                if(user){
                    return done(null, false, {message: 'User already exists'});
                }
                const newUser = {
                    first_name,
                    last_name,
                    email, 
                    password: createHash(password),
                    role
                }
                let result = await usersModel.create(newUser);
                return done(null, result);
            } catch(error) {
                return done(null, false, {message: "error", status: 400});
            }
        }));

    passport.use('login', new LocalStrategy(
        {usernameField: 'email'}, async(username, password, done) => {
            try{
                const user = await usersModel.findOne({email: username})
                if(!user) return done(null, false, {message: 'User not found', status: 400});
                if(!isValidPassword(user, password)) return done(null, false, {message: 'Invalid password', status: 401});
                const {password: pass, ...userWithoutPass} = user._doc;
                const jwt = generateToken(userWithoutPass);
                return done(null, jwt);
            } catch(error) {
                return done(error);
            }
        }));

        passport.use('current', new JWTStrategy({
            jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: 'userToken'
        }, async (jwt_payload, done) => {
            try {
                console.log("El jwt es" + JSON.stringify(jwt_payload));
                return done(null, jwt_payload);
            } catch(error) {
                done(error);
            }
        }));

        // Serializar el usuario en la sesión
        passport.serializeUser((user, done) => {
            done(null, user);
        });

        // Deserializar el usuario de la sesión
        passport.deserializeUser((user, done) => {
            done(null, user);
        });

        /*passport.serializeUser((user, done) => {
            console.log(user)
            if (!user ) {
                return done(new Error('Invalid user or missing _id'));
            }
            done(null, user._id);
        });
        
        passport.deserializeUser( async(_id, done) => {
            try {
                let user = await usersModel.findOne({_id});
                return done(null, user);
            } catch(error) {
                return done({message: 'Error deserializing user'})
            }
        });*/
}

const cookieExtractor = (req) => {
    let token = null;
    if(req && req.cookies) {
        token = req.cookies['loginCookie'];
    }
    console.log(token);
    return token;
}

export default initializePassport;