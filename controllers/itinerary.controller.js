import Itinerary from '../models/itinerary.js'


const controller = {

    getItineraries: async (req, res) => {




        try {
            let getItineraries
            let queries = {};

            if (req.query.cityId) {
                queries.city = req.query.cityId
            }



            if (req.query.city === 'true') {
                getItineraries = await Itinerary.find().populate('city');
            } else {
                getItineraries = await Itinerary.find(queries).populate('user');
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
            next(error)

        }
    },

    getItineraryById: async (req, res) => {

        let queries = {};

        if (req.query.userId) {
            queries.user = req.query.userId
        }

        try {
            const oneItinerary = await Itinerary.findById(req.params.id).populate('city').populate('user');

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
            next(error)


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
            next(error)

        }

    },

    updateItinerary: async (req, res) => {

        try {
            await Itinerary.updateOne({ _id: req.params.id }, req.body);

            return res.status(200).json({
                success: true,
                message: 'Itinerary updated'
            })

        } catch (error) {
            next(error)

        }

    },

    deleteItinerary: async (req, res) => {

        try {
            await Itinerary.deleteOne({ _id: req.params.id })

            return res.status(200).json({
                success: true,
                message: 'Itinerary deleted'
            })

        } catch (error) {
            next(error)

        }

    }

}

export default controller;