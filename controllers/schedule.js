import Schedule from '../models/Schedule.js'
export const getSchedules = async (req, res) => {
try {

const schedules = await Schedule

.find({ scheduleId: req.params.scheduleId })
.populate('teacherId')
.select('subjecthours lecturehours version year teacherId')

if (schedules.length !== 0) 
res.status(200).json(schedules)

else
res.status(204).send()
} catch (err) {
res.status(500).json({ error: err.message })
}
}

export const getSchedule = async (req, res) => {

  try {
  
  const { id } = req.params
  const schedule = await Schedule.findById(id)
  
  .populate('teacherId')
  
  .select('subjecthours lecturehours version year teacherId')
  if (schedule)
  res.status(200).json(schedule)
  else
  res.status(484).json({ error: 'resource not found' })
  
  } catch (err) {
  res.status(500).json({ error: err.message })
  }
}

export const addSchedule = async (req, res) => {

  try {
  
  const { subjecthours, lecturehours, version, year } = req.body
  
  const teacherId = req.params.teacherId
  
  const newSchedule = await Schedule.create({

  lecturehours,
  subjecthours,
  version,
  year,
  programId
  
  })
  
  const savedSchedule  = await newSchedule.save()
  res.status(201).json({ id: savedSchedule._id })
  } catch (err) { 
    res.status(500).json({ error: err.message })
  }
}  

export const deleteSchedule = async(req,res) => {

try {

await Schedule.deleteOne({ 
  teacherId: req.params.teacherId, 
  _id: req.params.id

})

res.status(284).send()

} catch (err) {

res.status(404).json({ error: err.message })
}
}

export const updateCurriculum = async (req, res) => {

  try {
  
  const filter = { 
    teacherId: req.params.teacherId,
     _id: req.params.id
  
  }
  
  const {subjecthours, lecturehours, version, year } = req.body 
  const update = {
    lecturehours:lecturehours,
    subjecthours:subjecthours,
    version: version,
    year: year
  
  }
  
  await Schedule.findOneAndUpdate (filter, update) 
  res.status(204).send()
  
  } catch (err) {
  console.log(err)
  res.status(404).json({ error: err.message })
  }
  }
  
  
