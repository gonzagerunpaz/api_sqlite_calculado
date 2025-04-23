const { Router } = require("express");
const router = Router();
const { getRoles, getRolById } = require("../controllers")["rolController"];

router.get("/", getRoles);
router.get("/:id", getRolById);

module.exports = router;
