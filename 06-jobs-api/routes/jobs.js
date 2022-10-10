const express = require('express')
const router = express.Router()

const {getAllJobs, getJob,createJobs,updateJob,deleteJob} = require('../controllers/jobs')

router.route('/').post(createJobs).get(getAllJobs)
router.route('/:id').patch(updateJob).get(getJob).delete(deleteJob)

module.exports = router