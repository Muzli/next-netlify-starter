import fs from 'fs';
import path from 'path';

export function getFilenames(directory) {
  console.log('process.cwd()', process.cwd());
  var dirs = fs.readdirSync(process.cwd()).filter(file => fs.lstatSync(path.join(process.cwd(), file)).isDirectory());
  console.log('contents', dirs);
  
  const dirPath = path.join(process.cwd(), directory);
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'));
}