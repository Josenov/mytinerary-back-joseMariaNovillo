import User from "../../models/user.js"



export const accountExistsSignIn = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email})

    if(user){
        req.user={ 
            id: user._id,
            email: user.email,
            image: user.image,
            password:user.password,
            online:user.online,
            verified:user.verified

        }

        return next()
    }

    return res.status(400).json({
        success:false,
        message:'User not registered'
    })
}