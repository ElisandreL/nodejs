//------------------- exo http et fs ------------------------------

/*const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html; charset=utf-8'); Exo Intro 1
    // res.end('<h1>Hello World!</h1>'); Exo Intro 1
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if (err) throw err
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(data);
    })
});


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});*/

//------------------- exo url ------------------------------
const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if (err) throw err
        let query = url.parse(req.url, true).query;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        data = data.replace('{{name}}', query.name)
        res.end(data);
    })
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



