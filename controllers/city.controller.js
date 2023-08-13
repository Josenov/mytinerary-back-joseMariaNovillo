import City from '../models/city.js'

const controller = {
    getCities: async (req, res) => {
        try {
            const cities = await City.find(req.body);

                return res.status(200).json({
                    success:true,
                    cities:cities
                })
            
            } catch (error) {
                return res.status(500).json({
                    success:false,
                    message:'Error: city not found'
            })
            
        }
    },

    createCities: async (req, res) => {

        try{
            const newCity = await City.create(req.body);

                return res.status(201).json({
                    success:true,
                    message:'City created'
        })

        } catch(error){
            return res.status(500).json({
                success:false,
                message:'Error: city not created'
            })

        }

        }  
        
    }



export default controller;