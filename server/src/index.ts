import fastify from 'fastify'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import _static from 'fastify-static'
import config from './config'

const app = fastify({ logger: config.debug })

app.register(helmet)
app.register(cors, { origin: config.env === 'development' })
app.register(_static, { root: config.clientPath, wildcard: false })

app.get('/api/name', async (req: any, res) => {
  try {
    const name = config.app.name

    res.status(200).send({
      success: true,
      result: name
    })
  } catch (error) {
    console.error(error)

    res.status(500).send({
      success: false,
      error: 'Internal Server Error',
      message: error.message
    })
  }
})

app.get('*', function (req, res: any) {
  res.sendFile('index.html')
})

app.listen(config.port, (err, address) => {
  if (err) {
    throw err
  }
})
