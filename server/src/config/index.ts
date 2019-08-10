import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const env = process.env.NODE_ENV || 'development'
const debug = env !== 'production'

const rootPath = path.join(__dirname, '../../')
const clientPath = path.join(rootPath, 'client/build')

export default {
  env: env,
  debug: debug,
  rootPath,
  clientPath,
  port: process.env.PORT || env === 'production' ? 5000 : 5001,
  app: {
    name: 'React'
  }
}
