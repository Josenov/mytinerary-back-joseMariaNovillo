import express from 'express'
import userController from '../controllers/user.controller.js'
import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router()

const {getUsers, getUserById, createUser, updateUser, deleteUser} = userController

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', isAdmin, deleteUser);

export default router;