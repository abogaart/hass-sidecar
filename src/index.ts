import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

import API from './lib/API';
import Logger from './lib/Logger';

// Load environment variables
dotenv.config();

/**
 * Bootstrap application
 */
const init = async () => {
  try {
    const welcomePath = path.join(__dirname, 'welcome.txt');
    const welcomeBuffer = await fs.promises.readFile(welcomePath);

    // eslint-disable-next-line no-console
    console.log(welcomeBuffer.toString());
  } catch (e) {
    Logger.error(e);
  }

  // Start API service
  try {
    API.getInstance();
  } catch (e) {
    Logger.error(e);
  }
};

// Start
init().catch(e => {
  Logger.error(e);
});
