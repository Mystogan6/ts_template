import { Request, Response, NextFunction } from 'express'

export default function setCorsMiddleware() {
  return function (_: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000')

    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, DELETE, PUT'
    )
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type,X-CSRF-Token,Authorization,x-xsrf-token'
    )
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
  }
}
