const autoBind = require("auto-bind")
const express = require('express')
const _ = require('lodash')

const Logger = require('./Logger')

class LoggerManager {
  constructor() {
    autoBind(this)
    this.loggerMap ={}

    this.app = express()
    this.app.get('/:id?', this.onGetLogs)
  }

  onGetLogs(req, res, next) {
    try {
      const loggerId = _.get(req, 'params.id', 'default')
      const logger = this.loggerMap[loggerId]
      if (!logger) {
        return res.send([])
      }
      const id = _.get(req, 'query.id', -1)
      const logs = _.filter(logger.logs, log => log.id > id)
      res.send(logs)
    } catch (error) {
      next(error)
    }
  }

  getLogger(id) {
    const loggerIdd = id || 'default'
    let logger = this.loggerMap[loggerIdd]
    if (!logger) {
      this.loggerMap[loggerIdd] = logger = new Logger(id)
    }
    return logger
  }

  express() {
    return this.app
  }
}

exports = module.exports = new LoggerManager()
