import fs from 'fs';
import path from 'path';

export function getFilenames(directory) {
  console.log('process.cwd()', process.cwd());
  var dirs = fs.readdirSync(process.cwd()).filter(file => fs.lstatSync(path.join(process.cwd(), file)).isDirectory());
  dirs.forEach(dir => {
    if(dir !== 'node_modules') {
      var d_path = path.join(process.cwd(), dir);
      console.log('dir', dir);
      console.log('contents', fs.readdirSync(d_path).filter(file => fs.lstatSync(path.join(d_path, file)).isDirectory()));
    }
  });  
  const dirPath = path.join(process.cwd(), directory);
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'));
}