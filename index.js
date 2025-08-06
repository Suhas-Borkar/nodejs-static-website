import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = '';
    const safeBase = path.join(__dirname);

    if (req.url === '/') {
        filePath = path.join(__dirname, 'template', 'index.html');
    }
    else if (req.url === '/about') {
        console.log("About page requested");
        filePath = path.join(__dirname, 'template', 'about.html');
    }
    else if (req.url === '/service') {
        console.log("Service page requested");
        filePath = path.join(__dirname, 'template', 'service.html');
    }
    else if (req.url === '/feature') {
        console.log("feature page requested");
        filePath = path.join(__dirname, 'template', 'feature.html');
    }
    else if (req.url === '/quote') {
        console.log("Quote page requested");
        filePath = path.join(__dirname, 'template', 'quote.html');
    }
    else if (req.url === '/team') {
        console.log("Team page requested");
        filePath = path.join(__dirname, 'template', 'team.html');
    }
    else if (req.url === '/testimonial') {
        console.log("Testimonial page requested");
        filePath = path.join(__dirname, 'template', 'testimonial.html');
    }
    else if (req.url === '/404') {
        console.log("404 page requested");
        filePath = path.join(__dirname, 'template', '404.html');
    }
    else if (req.url === '/contact') {
        console.log("Contact page requested");
        filePath = path.join(__dirname, 'template', 'contact.html');
    }
    else if (req.url === '/navbar') {
        console.log("Navbar page requested");
        filePath = path.join(__dirname, 'template', 'navbar.html');
    }
    else if (req.url === '/footer') {
        console.log("Footer page requested");
        filePath = path.join(__dirname, 'template', 'footer.html');
    }
    else if (req.url.startsWith('/statics/')) {
        filePath = path.join(__dirname, req.url);
    }
    else if (req.url === '/favicon.ico') {
        res.writeHead(204);
        return res.end();
    }
    else {
        filePath = path.join(__dirname, 'public', req.url);
    }

    filePath = path.normalize(filePath);

    // Prevent directory traversal
    if (!filePath.startsWith(safeBase)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 - Forbidden');
    }

    const ext = path.extname(filePath);
    const contentType = getContentType(ext);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`<h1 style="text-align:center;"> 404 - File Not Found </h1>
                <p style="text-align:center;">The requested URL <strong>${req.url}</strong> was not found on this server.</p>
                <p style="text-align:center;">Please check the URL and try again.</p>
                <p style="text-align:center;">If you believe this is an error, please contact the site administrator.</p>
                <p style="text-align:center;">Thank you for your understanding.</p>
                <p style="text-align:center;">&copy; ${new Date().getFullYear()} Your Company Name</p>
                <p style="text-align:center;">This is a custom 404 error page.</p>
                <p style="text-align:center;">
                    Please return to the <a href="/">homepage</a>.
                </p>
            `);
        } else {
            res.writeHead(200, { 'Content-Type': `${contentType}; charset=utf-8` });
            res.end(data);
        }
    });
});





function getContentType(ext) {
    switch (ext) {
        case '.html': return 'text/html';
        case '.css': return 'text/css';
        case '.js': return 'text/javascript';
        case '.png': return 'image/png';
        case '.jpg':
        case '.jpeg': return 'image/jpeg';
        case '.svg': return 'image/svg+xml';
        case '.json': return 'application/json';
        default: return 'application/octet-stream';
    }
}

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
