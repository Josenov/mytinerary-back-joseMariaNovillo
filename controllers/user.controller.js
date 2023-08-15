import User from '../models/user.js'

const controller = {
    getUsers:(req, res) =>{
        res.json({
            user: 'Jose Novillo'
        })
    },

    createUser:async (req, res)=>{
        try {
            const newUser = await User.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'User created'
            })
            
        } catch (error) {
            res,status(500).json({
                success:false,
                message:'Failed to create user'
            })
            
        }
    },
    deleteUser:()=>{},

}

export default controller;