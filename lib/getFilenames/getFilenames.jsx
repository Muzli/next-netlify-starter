import fs from 'fs';
import path from 'path';

function logDirectories(base_dir) {
  if(base_dir !== 'node_modules' && base_dir !== 'vendor') {
    var dirs = fs.readdirSync(base_dir).filter(file => fs.lstatSync(path.join(base_dir, file)).isDirectory());
    console.log("base_dir", base_dir);
    console.log("dirs", dirs);
    dirs.forEach((dir) => {
      logDirectories(path.join(base_dir, dir));
    });
  }
}

export function getFilenames(directory) {
  console.log('process.cwd()', process.cwd());
  var rootDirPath = path.join(process.cwd(), '..', '..');
  var dirs = fs.readdirSync(rootDirPath).filter(file => fs.lstatSync(path.join(rootDirPath, file)).isDirectory());
  console.log('root dirs', dirs);
  dirs.forEach((dir) => { logDirectories(path.join(rootDirPath, dir)); });
   
  const dirPath = path.join(process.cwd(), directory);
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'));
}