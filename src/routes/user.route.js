const { Router } = require("express");
const router = Router();
const { getUser, getUserById, crearUsuario, getSimpleUser } =
  require("../controllers")["userController"];

router.get("/", getUser);
router.get("/userName", getSimpleUser);
router.get("/:id", getUserById);
router.post("/", crearUsuario);

module.exports = router;
