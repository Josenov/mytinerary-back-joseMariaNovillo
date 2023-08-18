import express from 'express'
import cityController from '../controllers/city.controller.js'

const router = express.Router()

const { getCities, createCities, getCityById, updateCity, deleteCity} = cityController;

router.get('/', getCities);

router.get('/:id', getCityById);

router.post('/', createCities);

router.put('/:id', updateCity);

router.delete('/:id', deleteCity);

export default router;