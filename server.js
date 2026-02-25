// 1. Подключаем модуль http (встроен в Node.js)
const http = require('http');

// 2. Создаём сервер
const server = http.createServer((req, res) => {
  
  // Логируем каждый запрос
  console.log('Получен запрос:', req.method, req.url);
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Main</h1>');
  }

  else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>About</h1>');
  }

  // (404)
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page 404');
  }
  
});

// 5. Запуск сервера на порту 3000
server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});
