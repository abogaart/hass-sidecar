import moment from 'moment';

type IColor = 'red' | 'green' | 'blue' | 'yellow' | 'white';

const log = (color: IColor, text: any) => {
  let code: string;
  switch (color) {
    case 'blue':
      code = '\x1b[34m';
      break;
    case 'green':
      code = '\x1b[32m';
      break;
    case 'red':
      code = '\x1b[31m';
      break;
    case 'white':
      code = '\x1b[37m';
      break;
    case 'yellow':
      code = '\x1b[33m';
      break;
    default:
      code = '\x1b[37m';
      break;
  }
  const date = moment().format('YYYY-MM-DD HH:mm:ss.SSS');

  // eslint-disable-next-line no-console
  console.log(`${code}${date}\x1b[0m - ${text}`);
};

export default class Logger {
  static log(text: any, color: IColor = 'white') {
    log(color, `[LOG] ${text}`);
  }

  static info(text: any) {
    log('blue', `[INFO] ${text}`);
  }

  static debug(text: any) {
    if (process.env.DEBUG) {
      log('green', `[DEBUG] ${text}`);
    }
  }

  static warn(text: any) {
    log('yellow', `[WARN] ${text}`);
  }

  static error(text: any) {
    log('red', `[ERROR] ${text}`);
  }
}
