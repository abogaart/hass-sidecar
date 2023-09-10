import moment from 'moment';

type IColor = 'red' | 'green' | 'blue' | 'yellow' | 'white';

const log = (color: IColor, text: any, ...optionalParams: any[]) => {
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
  console.log(`${code}${date}\x1b[0m - ${text}`, ...optionalParams);
};

export class Logger {
  static log(text: any, ...optionalParams: any[]) {
    log('white', `[LOG] ${text}`, ...optionalParams);
  }

  static info(text: any, ...optionalParams: any[]) {
    log('blue', `[INFO] ${text}`, ...optionalParams);
  }

  static debug(text: any, ...optionalParams: any[]) {
    if (process.env.DEBUG) {
      log('green', `[DEBUG] ${text}`, ...optionalParams);
    }
  }

  static warn(text: any, ...optionalParams: any[]) {
    log('yellow', `[WARN] ${text}`, ...optionalParams);
  }

  static error(text: any, ...optionalParams: any[]) {
    log('red', `[ERROR] ${text}`, ...optionalParams);
  }
}
