import fs from 'fs';
import path from 'path';

// Update to point to public/components
const componentsDir = path.join(process.cwd(), 'public', 'components');
const previewsDir = path.join(process.cwd(), 'public', 'previews');
const outputFile = path.join(process.cwd(), 'public', 'index.json');
const backupFile = path.join(process.cwd(), 'public', 'index.backup.json');

function generateIndex() {
  if (!fs.existsSync(componentsDir)) {
    console.error(`Components folder not found at ${componentsDir}`);
    process.exit(1);
  }

  const componentFiles = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.json'));
  const index = [];

  componentFiles.forEach((file) => {
    const baseName = path.basename(file, '.json');
    const previewExtensions = ['.webp', '.png', '.jpg'];
    let previewPath = null;

    for (const ext of previewExtensions) {
      const fullPath = path.join(previewsDir, `${baseName}${ext}`);
      if (fs.existsSync(fullPath)) {
        previewPath = `/previews/${baseName}${ext}`;
        break;
      }
    }

    if (!previewPath) {
      console.warn(`No preview found for ${file}`);
      return;
    }

    index.push({
      name: baseName.replace(/-/g, ' '),
      preview: previewPath,
      jsonPath: `/components/${file}`,
    });
  });

  // Backup logic
  if (fs.existsSync(outputFile)) {
    if (fs.existsSync(backupFile)) {
      fs.unlinkSync(backupFile); // delete old backup
    }
    fs.renameSync(outputFile, backupFile); // move current index.json to backup
    console.log('Previous index.json backed up as index.backup.json');
  }

  fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
  console.log(`Generated new index.json with ${index.length} components.`);
}

generateIndex();
