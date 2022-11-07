const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const { stdin, stdout } = process;

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

stdout.write('hi, you need add same text, thk\n');

stdin.on('data', data => {
    if (data.toString().trim() === 'exit') exit();
    output.write(data);
});

process.on('exit', () => stdout.write('\nThk good luck with your study Node.js\n') );
process.on ('SIGINT', exit);


