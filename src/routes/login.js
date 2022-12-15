const { Router } = require("express");
const router = Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env" });

const bcryptjs = require("bcryptjs");

// invocamos el modulo de conexion
const connection = require("../Database/db");

router.post("/login", async (req, res) => {
   const { user, pass } = req.body;
   let passwordHash = await bcryptjs.hash(pass, 8);
   if (user && pass) {
      connection.query(
         "SELECT * FROM users WHERE user = ?",
         [user],
         async (error, results, fields) => {
            if (
               results == 0 ||
               !(await bcryptjs.compare(pass, results[0].pass))
            ) {
               res.send("usuario o Password incorrectas ");
            } else {
               res.send(results[0]);
            }
         }
      );
   } else {
      res.send("falta info");
   }
});
module.exports = router;
