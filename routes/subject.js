import express from 'express'
import { getSubject, getSubjects, addSubject, updateSubject, deleteSubject } from '../controllers/courses.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, getSubject)
router.get('/:id', verifyToken, getSubjects)
router.post('/', verifyToken, addSubject)
router.put('/:id', verifyToken, updateSubject)
router.delete('/:id', verifyToken, deleteSubject)

export default router