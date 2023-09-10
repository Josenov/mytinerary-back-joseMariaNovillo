import express from 'express'
import authController from '../controllers/auth.controller.js'
import { accountExistsSignUp } from '../middlewares/auth/accountExistsSignUp.middleware.js'
import { accountExistsSignIn } from '../middlewares/auth/accountExistsSignIn.middleware.js'
import { accountHasBeenVerified } from '../middlewares/auth/accountHasBeenVerified.middleware.js'
import { passwordIsOk } from '../middlewares/auth/passwordIsOk.middleware.js'
import passport from '../middlewares/passport.js'





const{signup, signin, signout} = authController

const router = express.Router()

router.post('/signup', accountExistsSignUp , signup )
router.post('/signin', accountExistsSignIn, 
accountHasBeenVerified, 
passwordIsOk,
signin )
router.post('/signout', passport.authenticate('jwt', { session: false}) ,signout )



export default router;