const router = require("express").Router();
const { login, register, deleteAllData } = require("../controllers/auth");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/reset").delete(deleteAllData);

module.exports = router;
