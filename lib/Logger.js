const autoBind = require("auto-bind")
const express = require('express')
const log4js = require('log4js')
const _ = require('lodash')

const logger = log4js.getLogger()
logger.level = log4js.levels.DEBUG

class Logger {
  constructor(id) {
    autoBind(this)
    this.logs = []
    this.id = id
  }

  reset() {
    this.logs = []
  }

  log (type, ...data) {
    if (type === 'error') {
      logger.error(...data)
    } else if (type === 'warn') {
      logger.warn(...data)
    } else if (type === 'info') {
      logger.info(...data)
    } else {
      logger.info(...data)
    }

    const levelMap = {
      'info': 0,
      'warn': 1,
      'error': 2
    }

    if (this.id) {
      this.logs.push({
        type,
        level: levelMap[type] || 0,
        datetime: +new Date(),
        id: _.get(_.last(this.logs), 'id', -1) + 1,
        line: _.chain(data).map(item => {
          if (_.isObject(item) && _.isError(item) === false) {
            try {
              return JSON.stringify(item, null, 1)
            } catch (error) {
              logger.error('Failed during logManager.log to stringify:', error)
            }
          }
          if (_.isUndefined(item)) {
            return 'undefined'
          } else {
            return item.toString()
          }
        }).join(' ').value()
      })
    }
  }

  warn(...data) {
    this.log('warn', ...data)
  }

  error(...data) {
    this.log('error', ...data)
  }

  info(...data) {
    this.log('info', ...data)
  }

}

exports = module.exports = Logger
