import fs from 'fs';
const buffer = fs.readFileSync('c:/Users/NIKITA HOME PERSONAL/Desktop/bny/src/pages/GenerateWish.jsx');
console.log(buffer.slice(0, 100).toString('hex'));
console.log(buffer.slice(0, 100).toString());
