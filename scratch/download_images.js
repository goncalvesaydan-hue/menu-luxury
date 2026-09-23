const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const items = {
    "i1": "salmon,carpaccio",
    "i2": "burrata,cheese",
    "i3": "black,cod,fish",
    "i4": "grilled,seabass",
    "i5": "tuna,tartare",
    "i6": "croquettes,food",
    "i7": "octopus,food",
    "i8": "glazed,salmon",
    "i9": "filet,mignon",
    "i10": "lamb,chops",
    "i11": "wagyu,steak",
    "i12": "chocolate,fondant",
    "i13": "berry,cheesecake",
    "i14": "tarte,tatin",
    "i15": "fig,bruschetta",
    "i16": "beetroot,carpaccio",
    "i17": "linguine,clams",
    "i18": "seared,scallops",
    "i19": "duck,magret",
    "i20": "meat,risotto",
    "i21": "passionfruit,mousse",
    "i22": "fruit,pavlova",
    "sec-1": "appetizers",
    "sec-2": "seafood",
    "sec-3": "steakhouse",
    "sec-4": "desserts"
};

const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)){
    fs.mkdirSync(assetsDir);
}

async function downloadImage(id, keyword) {
    const destPath = path.join(assetsDir, `${id}.jpg`);
    if (fs.existsSync(destPath)) {
        console.log(`Skipping ${id}.jpg as it already exists.`);
        return;
    }
    const url = `https://loremflickr.com/600/400/${keyword}/all?lock=1`;
    
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    
    const stream = fs.createWriteStream(destPath);
    await finished(Readable.fromWeb(res.body).pipe(stream));
}

async function run() {
    console.log("Starting downloads...");
    for (const [id, keyword] of Object.entries(items)) {
        console.log(`Downloading ${id}.jpg for keyword: ${keyword}...`);
        try {
            await downloadImage(id, keyword);
        } catch(e) {
            console.error(`Error downloading ${id}:`, e.message);
        }
    }
    
    console.log("Downloads complete. Updating data.js...");
    const dataJsPath = path.join(__dirname, '..', 'data.js');
    let dataJs = fs.readFileSync(dataJsPath, 'utf8');
    
    // Replace section images
    dataJs = dataJs.replace(/id: "(sec-\d+)",\s*name: "[^"]+",\s*image: "[^"]+"/g, (match, secId) => {
        return match.replace(/image: "[^"]+"/, `image: "assets/${secId}.jpg"`);
    });
    
    // Replace item images
    dataJs = dataJs.replace(/id: "(i\d+)",([\s\S]*?)image: "[^"]+"/g, (match, id, middle) => {
        return `id: "${id}",${middle}image: "assets/${id}.jpg"`;
    });
    
    fs.writeFileSync(dataJsPath, dataJs);
    console.log("Done!");
}

run();
