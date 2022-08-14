const Task = require("../models/task")
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error.errors.name })
  }
}

const getTask = async (req, res) => {
  try {
    const {id:taskId} = req.params
    const task = await Task.findOne({_id:taskId})
    if(!task){
      return res.status(404).json({msg: `Task with Id: ${taskId} does not exist...`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = (req, res) => {
  res.json({ "Updated User Id": req.params.id })
}

const deleteTask = async (req, res) => {
  try {
    const {id:taskId} = req.params
    const task = await Task.findOneAndDelete({_id:taskId})
    if(!task){
      return res.status(404).json({msg: `Task with Id: ${taskId} can't be deleted beacuse id dosen't exist...`})
    }
    res.status(200).json({msg: `Task with Id: ${taskId} has been successfully deleted...`})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
