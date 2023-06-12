import path from 'path'
import fs from 'fs'
import resetButton from '../js/resetButton';

const html = fs.readFileSync(path.resolve(__dirname, '../js/index.js'), 'utf8');
let dom;
let container;

console.log('resetButton');