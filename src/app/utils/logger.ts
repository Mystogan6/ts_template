import { injectable } from 'inversify'
import { ILogger } from '../../Services/interfaces/logger.interface'

@injectable()
export class Logger implements ILogger {
  error(msg: any): void {
    console.error(msg)
  }

  debug(msg: any): void {
    console.debug(msg)
  }

  info(msg: string): void {
    console.info(msg)
  }

  log(msg: string): void {
    console.log(msg)
  }

  getDateTime() {
    return `${new Date().toISOString()} | `
  }
}
