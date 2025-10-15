const { query } = require("../database");


async function findByEmail(email) {
  const rows = await query(
    "SELECT id_usuario, nombre, email, contrasena, creditos, estado, fecha_creacion FROM usuario WHERE email = ? LIMIT 1",
    [email]
  );
  return rows[0];
}

async function findById(idUsuario) {
  const rows = await query(
    "SELECT id_usuario, nombre, email, contrasena, creditos, estado, fecha_creacion FROM usuario WHERE id_usuario = ? LIMIT 1",
    [idUsuario]
  );
  return rows[0];
}

async function createUser({ nombre, email, contrasenaHash }) {

  const result = await query(
    "INSERT INTO usuario (nombre, email, contrasena) VALUES (?, ?, ?)",
    [nombre, email, contrasenaHash]
  );
  return { id_usuario: result.insertId, nombre, email };
}

module.exports = { findByEmail, findById, createUser };
