const https = require('https');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'assets');

// Duck breast / magret de pato - sliced
const url = 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=600';
const destPath = path.join(assetsDir, 'i19.jpg');

const makeRequest = (reqUrl, redirects = 0) => {
    if (redirects > 5) { console.error('Too many redirects'); return; }
    
    https.get(reqUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            makeRequest(res.headers.location, redirects + 1);
            return;
        }
        if (res.statusCode !== 200) {
            console.error(`HTTP ${res.statusCode}`);
            return;
        }
        
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
            fileStream.close();
            const stats = fs.statSync(destPath);
            console.log(`Downloaded i19.jpg (${stats.size} bytes)`);
        });
    }).on('error', (e) => console.error(e.message));
};

makeRequest(url);
