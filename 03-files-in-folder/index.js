const path = require('path');
const fs = require('fs');

const folderPath = path.join(__dirname, './secret-folder');


    fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error(err);
          return;
        }
      
        files.forEach((file) => {
          const filePath = path.join(folderPath, file);
      
          fs.stat(filePath, (err, stats) => {
            if (err) {
              console.error(err);
              return;
            }
      
            if (stats.isFile()) {
              const fileSizeInBytes = stats.size;
              const fileSizeInKb = fileSizeInBytes / 1024.0;
              const fileSize = `${fileSizeInKb.toFixed(3)}kb`;
              const fileExtension = path.extname(filePath);
              const fileNameWithoutExtension = path.basename(filePath, fileExtension);
      
              console.log(`${fileNameWithoutExtension} - ${fileExtension} - ${fileSize}`);
            }
          });
        });
      });