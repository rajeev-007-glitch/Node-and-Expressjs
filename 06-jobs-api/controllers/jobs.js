const getAllJobs = async (req, res) => {
  res.send("get all jobs")
}

const getJob = async (req, res) => {
  res.send("get job")
}

const createJobs = async (req, res) => {
  res.send("create job")
}

const updateJob = async (req, res) => {
  res.send("update job")
}

const deleteJob = async (req, res) => {
  res.send("delete job")
}

module.exports = {
  getAllJobs,
  getJob,
  createJobs,
  updateJob,
  deleteJob,
}
