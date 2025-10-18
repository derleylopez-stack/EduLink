const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("API EduLink en ejecución");
});

app.use("/api/auth", require("./src/routes/authRoutes"));

// Arranque
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
