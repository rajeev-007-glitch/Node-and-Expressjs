const Job = require("../models/Job")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt")
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}

const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  })

  if (!job) {
    throw new NotFoundError(`Job with job id ${jobId} does not exist.`)
  }

  res.status(StatusCodes.OK).json({ job })
}

const createJobs = async (req, res) => {
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req

  if (!company || !position) {
    throw new BadRequestError(`Position and company field can't be empty.`)
  }

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  )

  if (!job) {
    throw new NotFoundError(`Job with job id ${jobId} does not exist.`)
  }

  res.status(StatusCodes.OK).json({ job })
}

const deleteJob = async (req, res) => {
  const {user:{userId}, params:{id:jobId}} = req

  const job = await Job.findByIdAndDelete({_id:jobId, createdBy:userId})

  if(!job){
    throw new NotFoundError(`Job with job id ${jobId} does not exist.`)
  }
  res.status(StatusCodes.OK).send('Job deleted successfully.')
}

module.exports = {
  getAllJobs,
  getJob,
  createJobs,
  updateJob,
  deleteJob,
}
