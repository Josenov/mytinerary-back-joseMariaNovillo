import Itinerary from '../models/itinerary.js'


const controller = {

    getItineraries: async (req, res) => {

        let queries = {};

        if (req.query.cityId){
            queries.city = req.query.cityId
        }


        try {

            let getItineraries

            if(req.query.city === 'true'){
                getItineraries = await Itinerary.find().populate('user').populate('city');
            } else {
                getItineraries = await Itinerary.find(queries)
            }
            
            /* console.log(getItineraries) */


            if (getItineraries.length > 0) {

                return res.status(200).json({
                    success: true,
                    getItineraries,
                })
            }
            return res.status(404).json({
                sucess: false,
                message: 'Itineraries not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: Itineraries not found'
            })

        }
    },

    getItineraryById: async (req, res) => {

        try {
            const oneItinerary = await Itinerary.findById(req.params.id).populate('city');

            if (oneItinerary) {
                return res.status(200).json({
                    success: true,
                    city: oneItinerary
                })

            }

            return res.status(404).json({
                sucess: false,
                message: 'Itinerary not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: Itinerary not found'
            })


        }

    },

    createItineraries: async (req, res) => {

        try {
            const newItinerary = await Itinerary.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'Itinerary created'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: Itinerary not created'
            })

        }

    },

    updateItinerary: async (req, res) => {

        try {
            await Itinerary.updateOne({_id: req.params.id}, req.body);

            return res.status(200).json({
                success: true,
                message: 'Itinerary updated'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: Itinerary not updated'
            })

        }

    },

    deleteItinerary: async (req, res) => {

        try {
            await Itinerary.deleteOne({_id: req.params.id})

            return res.status(200).json({
                success: true,
                message: 'Itinerary deleted'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: Itinerary not deleted'
            })

        }

    }

}

export default controller;