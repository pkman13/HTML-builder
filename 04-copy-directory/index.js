const fs = require('fs').promises;
const path = require('path');

async function copyDir() {
  const srcDir = path.join(__dirname, 'files');
  const destDir = path.join(__dirname, 'files-copy');

  // создаем папку files-copy, если она еще не существует
  try {
    await fs.mkdir(destDir, { recursive: true });
  } catch (err) {
    console.error(`Error creating directory: ${err}`);
    return;
  }

  try {
    // читаем содержимое папки files
    const files = await fs.readdir(srcDir);

    // копируем каждый файл из папки files в папку files-copy
    for (const file of files) {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, file);

      const stats = await fs.stat(srcPath);

      if (stats.isDirectory()) {
        // если файл является директорией, рекурсивно вызываем функцию copyDir
        await copyDir(srcPath, destPath);
      } else {
        // копируем файл
        const fileContent = await fs.readFile(srcPath);
        await fs.writeFile(destPath, fileContent);
      }
    }
  } catch (err) {
    console.error(`Error copying directory: ${err}`);
  }
}

copyDir();
