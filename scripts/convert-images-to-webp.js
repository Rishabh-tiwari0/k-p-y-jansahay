import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const root = path.resolve("./public/images");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      const outPath = fullPath.replace(/\.[^.]+$/, ".webp");
      await sharp(fullPath).webp({ quality: 80 }).toFile(outPath);
      console.log("converted:", fullPath, "=>", outPath);
    }
  }
}

walk(root).catch((err) => {
  console.error(err);
  process.exit(1);
});
