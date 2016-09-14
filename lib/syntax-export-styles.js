'use babel';

const uipath = `${atom.packages.getLoadedPackage('uuu-syntax').path}/styles/uuu.less`;

export default function () {

  return new Promise(
    function (resolve, reject) {
      fs.readFile(uipath, 'utf8', (err, data) => {
        if (err) {
          reject(atom.notifications.addWarning(err.reason));
        }
        resolve(data.toString());
      });
    }
  )
}