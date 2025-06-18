const path = require('node:path');
const express = require('express');
const app = express();

process.loadEnvFile();
const PORT = process.env.PORT;

// para que encuentre los recursos en la carpeta public, css, js, img, etc...
app.use(express.static(path.join(__dirname, "public")));

// Informar a express de cual es el motor de las plantillas
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    // res.send("Todo OK")
    res.send(__dirname);
})

app.get("/alumnos", (req, res) => {
    res.render("alumnos", {"h1": "Título enviado desde la ruta", "titulo": "Alumnos EJS"});
})

app.get("/cursos", (req, res) => {
    res.render("cursos", {"h1": "Cursos disponibles", "titulo": "Cursos EJS"});
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
})

app.listen(PORT)
console.log(`Servidor iniciado en http://localhost:${PORT}`);

