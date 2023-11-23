const router = require("express").Router();
const {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJob);

router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
