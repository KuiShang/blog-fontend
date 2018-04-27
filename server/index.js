import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 9527

app.set('port', port)

// Import API Routes
app.use('/api', api)

// app.get('/aa', function (req, res) {
//   res.send('Hello World666')
// })
// app.use('/', express.static('/public'))

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
// app.listen(host)
// console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
var server = app.listen(port, () => {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
