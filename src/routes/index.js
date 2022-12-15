const { Router } = require("express");
const login = require("./login");
const register = require("./register");

const router = Router();

router.use("/", login);
router.use("/", register);

// Autenticacion de usuarios

module.exports = router;
