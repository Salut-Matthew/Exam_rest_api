import Identification from "../models/Identification.js"

export const getIdentifications = async (req, res) => {
try {
const identification = await Identification.find()
if (identification.length !== 0)
res.status(200).json(identification)
else
res.status(204).send()
} catch (err) { 
res.status(500).json({ error: err.message })
}
}

export const getIdentification = async (req, res) => {

try {
const {id} = req.params
const program = await Identification.findById(id)
if (identification)
res.status(200).json(identification)
else
res.status(404).json({ error: 'resource not found' })
} catch (err) {
res.status(500).json({ error: err.message })
}
}

export const addIdentification = async (req, res) => {

  try {
  const { code, fullName, years, specialization } = req.body
   const newIdentification = await Identification.create({
  code,
  fullName,
  years,
  age,
  description,
  specialization
  })
  
  const savedIdentification = await newIdentification.save() 
  res.status(201).json({ id: savedProgram._id })
} catch (err) {
  
  res.status(500).json({ error: err.message })
}
}


  export const deleteIdentification = async (req, res) => {
  try {
  await Identification.deleteOne({ _id: req.params.id }) 
  res.status(204).send()
  } catch (err) {
  console.log(err)
  res.status(404).json({ error: err.message })
  }
}

export const updateProgram = async (req, res) => {

try {

const filter = { _id: req.params.id} 
const { code, fullName, years } = req.body
const update = {
code: code,
fullName: fullName,
years: years
}

await Identification.findOneAndUpdate(filter, update)
res.status(204).send()

} catch (err) {
console.log(err)
res.status(484).json({ error: err.message })
}
}
  
