import express from 'express'
import { getSchedule, getSchedules, addSchedule, updateSchedule, deleteSchedule } from '../controllers/courses.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getSchedule)
router.get('/:id', verifyToken, getSchedules)
router.post('/', verifyToken, addSchedule)
router.put('/:id', verifyToken, updateSchedule)
router.delete('/:id', verifyToken, deleteSchedule)

export default router