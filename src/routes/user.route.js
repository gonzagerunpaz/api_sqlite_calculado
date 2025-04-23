const { Router } = require("express");
const router = Router();
const { getUser, getUserById } = require("../controllers")["userController"];

router.get("/", getUser);
router.get("/:id", getUserById);

module.exports = router;
