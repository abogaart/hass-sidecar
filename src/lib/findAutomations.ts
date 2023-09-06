import fs from 'node:fs';
import path from 'node:path';

import { Logger } from '@utils/Logger';

type IOptions = {
  filter?: (file: string) => Promise<boolean> | boolean;
  recursive?: boolean;
};

const findAutomations = async (
  dir: string,
  options?: IOptions,
): Promise<string[]> => {
  if (!options) {
    options = {
      recursive: false,
    };
  }

  let files: string[] = [];
  // Check is a dir
  try {
    const stat = await fs.promises.stat(dir);
    if (!stat.isDirectory()) {
      return [];
    }
  } catch (e) {
    Logger.error(e);
    return [];
  }

  // Get dir content
  let content;
  try {
    content = await fs.promises.readdir(dir);
  } catch (e) {
    Logger.error(e);
    return [];
  }

  for (const file of content) {
    const filePath = path.join(dir, file);

    try {
      const stat = await fs.promises.stat(filePath);
      if (stat.isFile()) {
        if (options.filter) {
          try {
            const allowed = await options.filter(filePath);
            if (!allowed) {
              continue;
            } else {
              files.push(filePath);
            }
          } catch (e) {
            Logger.error(e);
            continue;
          }
        } else {
          files.push(filePath);
        }
      } else if (!options.recursive) {
        continue;
      }
    } catch (e) {
      Logger.error(e);
      continue;
    }
    // Recursive iteration
    try {
      const founded = await findAutomations(filePath, options);
      files = files.concat(founded);
    } catch (e) {
      Logger.error(e);
      continue;
    }
  }

  return files.sort();
};

export default findAutomations;
