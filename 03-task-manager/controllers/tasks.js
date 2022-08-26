const Task = require("../models/task")
const asyncWrapper = require("../middleware/async")

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params
  const task = await Task.findOne({ _id: taskId })
  if (!task) {
    return res
      .status(404)
      .json({ msg: `Task with Id: ${taskId} does not exist...` })
  }
  res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params

  const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
    return res
      .status(404)
      .json({ msg: `Task with Id: ${taskId} does not exist...` })
  }
  res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params
  const task = await Task.findOneAndDelete({ _id: taskId })
  if (!task) {
    return res.status(404).json({
      msg: `Task with Id: ${taskId} can't be deleted beacuse id dosen't exist...`,
    })
  }
  res
    .status(200)
    .json({ msg: `Task with Id: ${taskId} has been successfully deleted...` })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
