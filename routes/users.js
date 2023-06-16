import express from 'express'
import { getUser, getUsers, addUser, updateUser, deleteUser} from '../controllers/courses.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, getUser)
router.get('/:id', verifyToken, getUsers)
router.post('/', verifyToken, addUser)
router.put('/:id', verifyToken, updateUser)
router.delete('/:id', verifyToken, deleteUser)

export default router