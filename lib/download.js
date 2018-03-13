
const download = require('download-git-repo');

module.exports = (address) => {
  return new Promise((resolve, reject) => {    
    let target = 'temp/html'
    download(`github:${address}`, target, {clone: false}, error => {
      if (error) reject(error);
      else resolve(target);
    });
  });
}
