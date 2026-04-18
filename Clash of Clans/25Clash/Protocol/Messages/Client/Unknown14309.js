const PiranhaMessage = require('../../PiranhaMessage')
const EnemyHomeDataMessage = require('../Server/EnemyHomeDataMessage')

class Unknown14309 extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14309
    this.version = 1
  }

  async decode () {}

  async process () {
    await new EnemyHomeDataMessage(this.client).send()
  }
}

module.exports = Unknown14309