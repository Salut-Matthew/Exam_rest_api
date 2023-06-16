import mongoose from 'mongoose'
export const IdentificationSchema = new mongoose.Schema(

{
  code: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  age: { type: String, required: true },
  description: { type: String, required: true }, 
  year: { type: Number, required: true }, 
  specialization:[]
},
{ timestamps: true }
)
const Identification = mongoose.model('Identification', IdentificationSchema)
export default Course