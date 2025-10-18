const express = require("express");
const { body } = require("express-validator");
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/authController");

const router = express.Router();

// Alias: permitir usar "password" como alias de "contrasena"
function mapPasswordAlias(req, _res, next) {
  if (req.body && !req.body.contrasena && req.body.password) {
    req.body.contrasena = req.body.password;
  }
  next();
}

router.post(
  "/register",
  mapPasswordAlias,
  [
    body("nombre")
      .isString()
      .isLength({ min: 2 })
      .withMessage("Nombre requerido"),
    body("email").isEmail().withMessage("Email inválido"),
    body("contrasena")
      .isLength({ min: 6 })
      .withMessage("Contraseña mínimo 6 caracteres"),
  ],
  controller.register
);

router.post(
  "/login",
  mapPasswordAlias,
  [
    body("email").isEmail().withMessage("Email inválido"),
    body("contrasena").isString().withMessage("Contraseña requerida"),
  ],
  controller.login
);

router.get("/me", auth, controller.me);

module.exports = router;
