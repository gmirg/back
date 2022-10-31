const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');
    let route = './';
    switch (req.url) {
        case '/':
            route += 'index.html';
            break;
        case '/about':
            route += 'about.html';
            break;
        case '/location':
            route += 'location.html';
            break;
        case '/mission':
            route += 'mission.html';
            break;
        case '/contact':
            route += 'contact.html';
            break;
        default:
            route += '404.html'
            break;
    }
    fs.readFile(route, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data);
        }
    })
})
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})