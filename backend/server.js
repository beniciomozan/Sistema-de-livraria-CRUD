const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const connectDB = require('./config/db');
const livrosRoutes = require('./routes/livrosRoutes');

//conecta ao banco de dados MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use('/api', livrosRoutes);

const PORT = 5432;
app.listen(PORT,()=>{
console.log(`Servidor rodando na porta ${PORT}`)
});