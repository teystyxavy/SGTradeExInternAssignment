const http = require('http')
const fs =  require('fs')
const port = 3000

http.createServer((req,res) => {
    fs.readFile('.html', (err, data) => {
    if (err) {
        res.writeHead(404);
        res.end('Error loading index.html')
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }
});
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});