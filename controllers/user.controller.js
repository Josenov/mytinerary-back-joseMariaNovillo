import User from '../models/user.js'

const controller = {
    
    getUsers: async (req, res) =>{
        try {
            
            const getUsers = await User.find()

            if (getUsers.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: getUsers
                })
            }
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })

        } catch (error) {
            next(error)
        }
    },

    getUserById: async (req, res) => {

        try {
            const getUserById = await User.findById(req.params.id)
            return res.status(200).json({
                success: true,
                user: getUserById
            })
        } catch (error) {
            next(error)
        }
    },


    createUser:async (req, res)=>{
        try {
            const newUser = await User.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'User created'
            })
            
        } catch (error) {
            next(error)
            
        }
    },

    updateUser: async (req, res) => {
        try {
            await User.updateOne({_id: req.params.id}, req.body);

            return res.status(200).json({
                success: true,
                message: 'user updated'
            })

        } catch (error) {
            next(error)

        }
    },


    deleteUser: async (req, res) => {

        try {
            await User.deleteOne({_id: req.params.id});

            return res.status(200).json({
                success: true,
                message: 'User deleted'
            })

        } catch (error) {
            next(error)

        };
    }

}

export default controller;