const express = require('express');
const logger = require('./src/middleware/logger');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();
const PORT = 3000;

// Gelen JSON verisini okumamızı sağlar (req.body)
app.use(express.json());

// Her isteği kayda alır. Routes'lardan ÖNCE gelmeli
app.use(logger);

app.get('/', (req, res) => {
  res.json({ message: 'TaskFlow API çalışıyor' });
});

// /tasks ile başlayan tüm istekleri taskRoutes'a yönlendirir
app.use('/tasks', taskRoutes);

// Tanımsız bir adrese istek gelirse
app.use((req, res) => {
  res.status(404).json({ message: 'Adres bulunamadı' });
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});