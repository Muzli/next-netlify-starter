import fs from 'fs';
import path from 'path';

export function getFilenames(directory) {
  console.log('process.cwd()', process.cwd());
  var testDirPath = path.join(__dirname, '..', '..', 'public', directory);
  var dirs = fs.readdirSync(testDirPath).filter(file => fs.lstatSync(path.join(testDirPath, file)).isDirectory());
  var files = fs.readdirSync(testDirPath).filter(file => fs.lstatSync(path.join(testDirPath, file)).isFile());
  console.log('contents dirs', dirs);
  console.log('contents files', files);
  
  
  const dirPath = path.join(process.cwd(), directory);
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'));
}