const { Router } = require("express");

const router = Router();

const bcryptjs = require("bcryptjs");

const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env" });

// invocamos el modulo de conexion
const connection = require("../Database/db");

// Metodo para registrar usuarios
router.post("/register", async (req, res) => {
   try {
      const { user, name, rol, pass } = req.body;
      //   guardando contraseña
      let passwordHash = await bcryptjs.hash(pass, 8);
      let userr = connection.query(
         "INSERT INTO users SET ?",
         { user: user, name: name, rol: rol, pass: passwordHash },
         async (error, results) => {
            if (error) {
               res.status(400).json({ Error: error.message });
            } else {
               res.status(200).json(userr.values);
            }
         }
      );
   } catch (error) {
      res.status(400).json({ Error: error.message });
   }
});

module.exports = router;
