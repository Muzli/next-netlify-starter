import fs from 'fs';
import path from 'path';

export function getFilenames(directory) {
  console.log('directory', directory);
  console.log('process.cwd()', process.cwd());
  const dirPath = path.join(process.cwd(), directory);
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'));
}