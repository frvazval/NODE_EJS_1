const path = require('node:path');
const express = require('express');
const app = express();

process.loadEnvFile();
const PORT = process.env.PORT;

// para que encuentre los recursos en la carpeta public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    // res.send("Todo OK")
    res.send(__dirname);
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
})

app.listen(PORT)
console.log(`Servidor iniciado en http://localhost:${PORT}`);

