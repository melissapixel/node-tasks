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

  else if (req.method === 'POST' && req.url === '/data') {
    let body = '';
    
    // Защита от переполнения
    req.on('data', chunk => {
      if (body.length > 1e6) { // Ограничение 1MB
        res.statusCode = 413;
        res.end('Request Entity Too Large');
        return;
      }
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('Получено:', data);
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'ok', received: data }));
      } catch (err) {
        res.statusCode = 400;
        res.end('Invalid JSON');
      }
    });
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
