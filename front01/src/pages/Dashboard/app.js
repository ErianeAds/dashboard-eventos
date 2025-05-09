const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const eventosRoutes = require('./routes/eventosRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/eventos', eventosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`));

//pasta front01/src/pages/Dashboard/