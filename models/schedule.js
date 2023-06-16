import mongoose from 'mongoose'
import { IdentificationSchema } from './Identification.js'
import { ScheduleSchema } from './Schedule.js'

const ScheduleSchema = new mongoose.Schema(

{
     subjecthours: { type: String, required: true, unique: true }, 
     lecturehours: { type: String, required: true, unique: true }, 
     version: { type: String, required: true, unique: true }, 
     year: {type: Number, required: true },
     teacherId: {

      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Identification',
      required: true
     },
     courses: [CourseSchema]

},
{ timestamps: true }
)
const Schedule= mongoose.model('Schedule', ScheduleSchema) 
export default Schedule
