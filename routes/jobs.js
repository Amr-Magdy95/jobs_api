const router = require("express").Router();
const {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} = require("../controllers/jobs");

/**
 * @swagger
 * /api/v1/jobs:
 *   get:
 *     summary: Retrieve a list of jobs
 responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */

router.route("/").get(getAllJobs).post(createJob);

router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
