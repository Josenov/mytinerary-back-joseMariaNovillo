import express from 'express'
import itineraryController from '../controllers/itinerary.controller.js'

const router = express.Router()

const { getItineraries, createItineraries, getItineraryById, updateItinerary, deleteItinerary} = itineraryController;

router.get('/', getItineraries);

router.get('/:id', getItineraryById);

router.post('/', createItineraries);

router.put('/:id', updateItinerary);

router.delete('/:id', deleteItinerary);

export default router;