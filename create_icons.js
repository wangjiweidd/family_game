// 创建简单的占位图标
const fs = require('fs');
const path = require('path');

// 确保images目录存在
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

// 创建一个1x1像素的透明PNG图片的BASE64编码
// 这是最小的有效PNG图片
const transparentPixelPNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

// 需要创建的图标文件
const iconFiles = [
  'icon_generate.png',
  'icon_generate_selected.png',
  'icon_history.png',
  'icon_history_selected.png',
  'icon_play.png',
  'icon_delete.png',
  'icon_empty.png',
  'logo.png'
];

// 为每个图标创建文件
iconFiles.forEach(iconFile => {
  const filePath = path.join(imagesDir, iconFile);
  const buffer = Buffer.from(transparentPixelPNG, 'base64');
  fs.writeFileSync(filePath, buffer);
  console.log(`创建图标: ${iconFile}`);
});

console.log('所有图标创建完成！'); 