#!/usr/bin/env node

import sharp from "sharp";
import path from "path";

await Promise.all(process.env.NAUTILUS_SCRIPT_SELECTED_FILE_PATHS.split("\n").map(async filepath => {
  const target = path.join(path.dirname(filepath), path.basename(filepath, path.extname(filepath)) + ".webp");
  await sharp(filepath).webp().toFile(target);
})) 

process.exit(0);