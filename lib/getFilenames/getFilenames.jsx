import fs from 'fs';
import path from 'path';

export function getFilenames(directory) {
  console.log('process.cwd()', process.cwd());
  var server_dir = path.join(process.cwd(), '.next', 'server');
  var dirs = fs.readdirSync(server_dir).filter(file => fs.lstatSync(path.join(server_dir, file)).isDirectory());
  var files = fs.readdirSync(server_dir).filter(file => fs.lstatSync(path.join(server_dir, file)).isFile());
  console.log('contents dirs', dirs);
  console.log('contents files', files);
  
  const dirPath = path.join(process.cwd(), directory);
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'));
}