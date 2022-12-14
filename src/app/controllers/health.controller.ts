import { Request, Response } from 'express'
import {
  controller,
  interfaces,
  httpGet,
  response,
  request
} from 'inversify-express-utils'

@controller('')
export default class HealthController implements interfaces.Controller {
  @httpGet('/ping')
  async ping(
    @response() res: Response,
    @request() req: Request
  ): Promise<void> {
    res.status(200).send('pong')
  }

  @httpGet('/version')
  async version(
    @response() res: Response,
    @request() req: Request
  ): Promise<void> {
    res.status(200).send(process.env.VERSION)
  }
}
