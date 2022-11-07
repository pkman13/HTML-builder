const fs = require('fs');
const path = require('path');
const { stdout } = require('process');

const read = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

read.on('data', data => stdout.write(data));
