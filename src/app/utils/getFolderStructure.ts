import fs from "fs";
import path from "path";

export function getFolderStructure(dir: string) {
  const folders = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return folders;
}
