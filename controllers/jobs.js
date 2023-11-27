const Job = require("../models/Jobs");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/badRequest");
const NotFoundError = require("../errors/notFound");

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.id }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs });
};
exports.createJob = async (req, res) => {
  req.body.createdBy = req.user.id;
  console.log(req.user);
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
exports.getJob = async (req, res) => {
  const {
    user: { id: userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findOne({ _id: jobId, createdBy: userId });
  if (!job) throw new NotFoundError(`No job with ${jobId}`);
  res.status(StatusCodes.OK).json({ job });
};
exports.updateJob = async (req, res) => {
  const {
    user: { id: userId },
    params: { id: jobId },
    body: { company, position },
  } = req;
  if (!company || !position)
    throw new BadRequestError("Fields can not be empty");
  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!job) throw new NotFoundError(`No job with ${jobId}`);
  res.status(StatusCodes.OK).json({ job });
};
exports.deleteJob = async (req, res) => {
  const {
    user: { id: userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findByIdAndRemove({ _id: jobIb, createdBy: userId });
  if (!job) throw new NotFoundError(`No job with ${jobId}`);
  res.sendStatus(StatusCodes.OK);
};
