const http = require('http');

const server = http.createServer((req, res) => {
    // Получаем путь из запроса
    const url = req.url;

    console.log(`Запрос на адрес: ${url}`);

    // Простая логика маршрутизации
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Главная страница. Добро пожаловать!');
    } 
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Страница "О нас". Мы изучаем Node.js!');
    } 
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Контакты: email@example.com');
    } 
    else {
        // Если адрес не найден
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Ошибка 404. Страница не найдена.');
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});