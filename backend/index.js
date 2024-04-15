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
        message:'IPHONE 14'
    },
    {
      id : '2',
      message:'IPHONE 12'
  },
  {
    id : '3',
    message:'Телевизор Samsung'
  },
  {
    id : '4',
    message:'ФАЛОЭМИТАТОР ЖОСКИЙ'
  }
  ]);
  });