import { createApp } from './app'

const VERSION = process.env.npm_package_version || '1.0.0'
const PORT = process.env.PORT || 3000
import { TYPES } from './Services/di/types'
import { ILogger } from './Services/interfaces/logger.interface'
import { container } from './Services/di/inversify.config'

// START SERVER
createApp(PORT, () => {
  const logger: ILogger = container.get<ILogger>(TYPES.ILogger)
  logger.log(`app (v${VERSION}) listening on port ${PORT}`)
})
