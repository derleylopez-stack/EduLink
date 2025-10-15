const { validationResult } = require("express-validator");
const { signToken, hashPassword, comparePassword } = require("../utils/auth");
const Usuario = require("../models/usuarioModel");

async function register(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nombre, email } = req.body;
  const contrasena = req.body.contrasena ?? req.body.password;

  try {
    const existing = await Usuario.findByEmail(email);
    if (existing) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }

    const passwordHash = await hashPassword(contrasena);
    const created = await Usuario.createUser({
      nombre,
      email,
      contrasenaHash: passwordHash,
    });
    const fullUser = await Usuario.findById(created.id_usuario);
    const token = signToken({ id: fullUser.id_usuario, email: fullUser.email });
    return res.status(201).json({
      message: "Usuario registrado con éxito",
      user: {
        id_usuario: fullUser.id_usuario,
        nombre: fullUser.nombre,
        email: fullUser.email,
        creditos: fullUser.creditos,
        estado: fullUser.estado,
        fecha_creacion: fullUser.fecha_creacion,
      },
      token,
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Error al registrar usuario" });
  }
}

async function login(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email } = req.body;
  const contrasena = req.body.contrasena ?? req.body.password;

  try {
    const user = await Usuario.findByEmail(email);
    if (!user || !user.contrasena) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const ok = await comparePassword(contrasena, user.contrasena);
    if (!ok) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    if (user.estado && String(user.estado).toLowerCase() !== "activo") {
      return res
        .status(403)
        .json({ message: "Usuario suspendido. Contacta soporte." });
    }

    const token = signToken({ id: user.id_usuario, email: user.email });
    return res.json({
      message: "Login exitoso",
      user: {
        id_usuario: user.id_usuario,
        nombre: user.nombre,
        email: user.email,
        creditos: user.creditos,
        estado: user.estado,
        fecha_creacion: user.fecha_creacion,
      },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Error al iniciar sesión" });
  }
}

async function me(req, res) {
  try {
    const user = await Usuario.findById(req.user.id);
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    return res.json({
      id_usuario: user.id_usuario,
      nombre: user.nombre,
      email: user.email,
      creditos: user.creditos,
      estado: user.estado,
      fecha_creacion: user.fecha_creacion,
    });
  } catch (err) {
    console.error("Me error:", err);
    return res.status(500).json({ message: "Error al obtener perfil" });
  }
}

module.exports = { register, login, me };
