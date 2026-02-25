// 1. Подключаем модуль http (встроен в Node.js)
const http = require('http');

// 2. Создаём сервер
const server = http.createServer((req, res) => {
  
  // 3. Обработка запроса
  console.log('Получен запрос:', req.method, req.url);
  
  // 4. Отправка ответа
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Привет!');
  
});

// 5. Запуск сервера на порту 3000
server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});