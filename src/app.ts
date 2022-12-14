import 'reflect-metadata'
import { InversifyExpressServer, getRouteInfo } from 'inversify-express-utils'
import { json } from 'express'
import prettyjson from 'prettyjson'
import swaggerUi from 'swagger-ui-express'
import morgan from 'morgan'

import { container } from './Services/di/inversify.config'
import corsMiddleware from './app/middlewares/corspolicy'

import './app/controllers/health.controller'

import swaggerConfig from './app/docs/swagger.json'

export const createApp = async (port: string | number, cb: () => void) => {
  const server: InversifyExpressServer = new InversifyExpressServer(
    container,
    null,
    null,
    null
  )
  server.setConfig((app) => {
    app.use(corsMiddleware())
    app.use(json())
    app.use(morgan('combined'))
    app.use(
      '/docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerConfig, { explorer: true })
    )
  })
  server.build().listen(port, cb)
  console.log(prettyjson.render({ routes: getRouteInfo(container) }))
}
