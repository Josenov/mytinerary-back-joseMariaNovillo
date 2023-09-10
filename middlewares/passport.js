import User from "../models/user.js";
import passport from 'passport'
import {Strategy, ExtractJwt} from "passport-jwt";


export default passport.use(
    new Strategy(
        {
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_TOKEN
        },

        async (jwt_payload, done)=>{

            try {
                const user = await User.findOne({_id:jwt_payload.id}); 

                if(user){
                    user.password = null;
                    return done(null, user)

                }else{
                    done(null, false)
                }

                
            } catch (error) {
                console.log(error)
                return done (error, false)
            }

        }
    )
)
