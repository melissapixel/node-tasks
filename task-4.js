const http = require('http');
const fs = require('fs'); // Подключаем модуль работы с файлами

const server = http.createServer((req, res) => {

    const url = req.url;
    console.log(`Запрос: ${url}`);

    // Определяем, какой файл читать
    let filePath = './public/index.html'; // По умолчанию
    let contentType = 'text/html'; // По умолчанию HTML

    if (url === '/about') {
        filePath = './public/about.html';
        contentType = 'text/html';

    } else if (url === '/contact') {
        filePath = './public/contact.html';
        contentType = 'text/html';

    } else if (url === '/style.css') {
        filePath = './public/style.css';
        contentType = 'text/css';

    } else if (url !== '/') {
        // Если адрес не главный и не about и не contact - ставим 404
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - File Not Find</h1><a href="/">Main</a>');
        return; // Важно выйти из функции, чтобы не читать файл дальше
    }

    // Читаем файл
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Если ошибка (например, файла нет)
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Ошибка сервера при чтении файла');
            console.error(err);
            return;
        }

        // Если всё ок, отправляем содержимое файла
        res.writeHead(200, { 
            'Content-Type': contentType + '; charset=utf-8'
         });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});