import express from 'express'
import cityController from '../controllers/city.controller.js'

const router = express.Router()

const { getCities, createCities, getCityById} = cityController;

router.get('/', getCities);

router.get('/:id', getCityById);

router.post('/', createCities);

export default router;