import City from '../models/city.js'

const controller = {
    getCities: async (req, res) => {

        let queries = {};

        if (req.query.city) {
            queries.city = new RegExp(`^${req.query.city}`, 'i');
        }

        if (req.query.country) {
            queries.country = new RegExp(`^${req.query.country}`, 'i');
        }


        try {
            const cities = await City.find(queries).populate('user');

            if (cities.length > 0) {

                return res.status(200).json({
                    success: true,
                    cities: cities
                })
            }
            return res.status(404).json({
                sucess: false,
                message: 'City not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: city not found'
            })

        }
    },

    getCityById: async (req, res) => {

        try {
            const oneCity = await City.findById(req.params.id);

            if (oneCity) {
                return res.status(200).json({
                    success: true,
                    city: oneCity
                })

            }

            return res.status(404).json({
                sucess: false,
                message: 'City not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: city not found'
            })


        }

    },

    createCities: async (req, res) => {

        try {
            const newCity = await City.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'City created'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: city not created'
            })

        }

    },

    updateCity: async (req, res) => {

        try {
            await City.updateOne({_id: req.params.id}, req.body);

            return res.status(200).json({
                success: true,
                message: 'City updated'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: city not updated'
            })

        }

    },

    deleteCity: async (req, res) => {

        try {
            await City.deleteOne({_id: req.params.id})

            return res.status(200).json({
                success: true,
                message: 'City deleted'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: city not deleted'
            })

        }

    }

}



export default controller;