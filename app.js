import 'dotenv/config.js'
import './config/db.js'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import createHttpError from "http-errors";
import indexRouter from './router/index.router.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended:false }))
app.use(morgan('dev'));
app.use(cors());
app.use('/api', indexRouter)

export const notFound = (req, res, next) =>{
    next(createHttpError(404, 'Error Message from ErrorHandler Middleware'))
}
export const errorHandler = (err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).json({
        status:err.status,
        message:err.message
    })
}

app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => console.log("server started on port: " + PORT))