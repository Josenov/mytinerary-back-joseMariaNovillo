import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'


const controller = {
    signup: async(req, res, next) =>{

        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex')
            req.body.password = bcryptjs.hashSync(req.body.password, 10);

            const user = await User.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'User register done!'
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error: Failed to register user'})
            
        }
        

    },

    signin : async (req, res, next) =>{

        try {
            let user = await User.findOneAndUpdate(
                {email:req.user.email},
                {online:true},
                {new:true}
            ) 

            const token =jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                },
                process.env.SECRET_TOKEN,
                {expiresIn:'5h'}
            )

            user.password = null;

            return res.status(200).json({
                success: true,
                message:'User Logged Succesfully',
                response:{
                    user,
                    token
                }
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error: Failed to authenticate user'})
        }

    },

    signout : async (req,res,next)=>{
        try {
            const user = await User.findOneAndUpdate(
                {email:req.user.email},
                {online:false},
                {new: true}
            )
            return res.status(200).json({
                success: true, 
                message: 'User Logged Out'
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error: Failed to sign out user'})
        }
    }
}

export  default controller 