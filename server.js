const express = require('express')

const pkg = require('./package.json')
const config = require('./config')
const LoggerManager = require('.')
const logger = LoggerManager.getLogger()
const loggerHello = LoggerManager.getLogger('hello')

const app = express()
app.use('/api/logs', LoggerManager.express())

const server = app.listen(config.port, async () => {
  logger.info(`${pkg.name} started at http://localhost:${server.address().port}/cms/admin/`)
  randomDebug()
})

async function randomDebug() {
  loggerHello.info(`random message ${Math.random()}`)
  setTimeout(randomDebug, 1000 * 5)
}

