import Schedule from "../models/Schedule.js"

export const getSubjects = async (req, res) => {

try {
const Schedule = await Schedule.findById(req.params.scheduleId)
const { code, lesson } = req.query

if (code) {
schedule.subjects = schedule.subjects.filter((item) => item. code==code)
}
if (lesson) {
 schedule.subjects = schedule.subjects.filter((item) => item. lesson == lesson)

}
if (schedule.subjects.length !== 0) 
res.status(200).json(schedule.subjects)
else
res.status(204).send()
} catch (err) {
res.status(500).json({ error: err.message })
}
}

export const getSubject = async (req, res) => {

  try {
  
  const {scheduleId, id} = req.params
  const schedule = await Schedule.findById(scheduleId)
  const subject = schedule.subjects.id(id)
  
  if (subject)
  res.status(200).json(subject)
  else
  res.status(484).json({ error: 'resource not found'})
  
  } catch (err) {
  
  res.status(500).json({ error: err.message })
  }
}

export const addSubject = async (req, res) => {

  try {
  
  const newSubject = req.body
  const schedule = await Schedule.findById(req.params.scheduleId)
  schedule.subjects.push(newSubject)
  await curriculum.save()
  const idNewSubject = schedule.subjects[schedule.subjects.length-1]._id ==
  res.status(201).json({ id: idNewSubject })
  } catch (err) {
  res.status(500).json({ error: err.message })
  
  }
}


export const deleteSubject = async (req, res) => {

  try {
    const {scheduleId, id } = req.params
    const schedule = await SchedulefindbyId(scheduleId)
    schedule.subject.id(id).remove()
    res.status(204).send()

  } catch (err) {
    console.log(err)
    res.status(404).json({ error: err.message })
  }
}


export const updateSubject = async (req, res) => {

  try {
  
  const {scheduleId, id} = req.params
  const schedule = await Schedule.findById(scheduleId)
  const {code, lesson, years, } = req.body 

  schedule.subject.id(id).code = code
  schedule.subject.id(id).lesson = lesson
  schedule.subject.id(id).years = years
  
  
  await schedule.save()
  
  res.status(204).send()
  
  } catch (err) {
  
  console.log(err)
  res.status(484).json({ error: err.message })
  
  }
}
  







