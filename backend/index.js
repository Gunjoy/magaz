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
        message:'Памяь - 128 ГБ. Цвет - Жёлтый. Процессор - A15 Bionic',
        image: 'localhost:3001/iphone_14.jpg'
    },
    {
      id : '2',
      name: 'IPHONE 12',
      price: '50000',
      message:'Памяь - 256 ГБ. Цвет - Чёрный. Процессор - A15 Bionic',
      image: 'localhost:3001/iphone-12.jpg'
  },
  {
    id : '3',
    name: 'Телевизор Samsung',
    price: '20000',
    message:'Диагональ - 40" (101.6 см). Разрешение экрана - 1920x1080 Пикс (Full HD)',
    image: 'localhost:3001/tel_samsung_top.jpg'
  },
  {
    id : '4',
    name: 'Телевизор Samsung топовый',
    price: '59999',
    message:'Диагональ - 40" (101.6 см). Разрешение экрана - 1920x1080 Пикс (Full HD)',
    image: 'localhost:3001/tel_samsung_sred.jpg'
  },
  {
    id : '5',
    name: 'Телевизор Samsung ещё более топовый',
    price: '81250',
    message:'Диагональ - 40" (101.6 см). Разрешение экрана - 1920x1080 Пикс (Full HD)',
    image: 'localhost:3001/tel_samsung_sred.jpg'
  },
  {
    id : '6',
    name: 'Телевизор Samsung наитопевовший',
    price: '103750',
    message:'Диагональ - 40" (101.6 см). Разрешение экрана - 1920x1080 Пикс (Full HD)',
    image: 'localhost:3001/tel_samsung_top_3.jpg'
  }
  ]);
  });