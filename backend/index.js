const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const portische = 3001


server.listen(portische, () => {
  console.log(`listening on ,${portische}`);
});
app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.json([{
        id : '1',
        name: 'IPHONE 14',
        price: '78950',
        message:'Памяь - 128 ГБ. Цвет - Жёлтый. Процессор - A15 Bionic'
    },
    {
      id : '2',
      name: 'IPHONE 12',
      price: '50000',
      message:'Памяь - 256 ГБ. Цвет - Чёрный. Процессор - A15 Bionic'
  },
  {
    id : '3',
    name: 'Телевизор Samsung',
    message:'Диагональ - 40" (101.6 см). Разрешение экрана - 1920x1080 Пикс (Full HD)'
  }
  ]);
  });