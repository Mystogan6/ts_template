import { Container } from 'inversify'
import { Logger } from '../../app/utils/logger'
import { ILogger } from '../interfaces/logger.interface'
import { TYPES } from './types'

const container = new Container()
container.bind<ILogger>(TYPES.ILogger).to(Logger).inSingletonScope()
export { container }
