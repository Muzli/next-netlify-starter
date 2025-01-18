import fs from 'fs';
import path from 'path';

export function getFilenames(directory) {
  console.log('process.cwd()', process.cwd());
  console.log('contents', fs.readdirSync(process.cwd()).filter(file => fs.lstatSync(path.join(process.cwd(), file)).isFile()));
  const dirPath = path.join(process.cwd(), directory);
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'));
}