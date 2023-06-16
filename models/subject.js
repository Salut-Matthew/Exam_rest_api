import mongoose from 'mongoose'

const SubjectSchema = new mongoose.Schema(
{
code: {type: String, required: true, unique: true}, 
lesson: { type: String, required: true }, 
years: { type: Number, required: true }, 

},

{ timestamps: true }

)

const Subject= mongoose.model('Subject', SubjectSchema) 
export default Subject