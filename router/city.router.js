import express from 'express'

const router = express.Router()

router.get('/', (req, res) =>{
    res.json({
        cities: [
            {
                name:'Paris',
                country:'France'
            },
            {
                name:'Dubai',
                country:'Emirates'
            },
        ]
    })
});

export default router;