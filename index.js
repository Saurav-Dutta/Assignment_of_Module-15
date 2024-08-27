// 1. Server Setup:
const http = require('http');
const fs = require('fs');

// Create the HTTP server
const server = http.createServer((req, res) => {
    
    // 2. Route Handling:
    if (req.url === '/') {
        res.write("This is the Home Page");
        res.end();
    }
    else if (req.url === '/about') {
        res.write("This is the About Page");
        res.end();
    }
    else if (req.url === '/contact') {
        res.write("This is the Contact Page");
        res.end();
    }



    // 3. File Operations:
    else if (req.url === '/file-write') {

        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.write('Failed to write to the file.');
            } else {
                res.write('File has been written successfully.');
            }
            res.end();
        });
    } else {
        // Handle 404 Not Found
        res.write('404 Not Found');
        res.end();
    }
});

// Listen on port 5500
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
