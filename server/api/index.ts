import app from '../src/app'
import { createServer, IncomingMessage, ServerResponse } from 'http'

const server = createServer(app)

export default function handler(req: IncomingMessage, res: ServerResponse) {
  if (!req.url) {
    req.url = '/'
  }
  
  return new Promise((resolve) => {
    server.emit('request', req, res)
    res.on('finish', resolve)
  })
} 